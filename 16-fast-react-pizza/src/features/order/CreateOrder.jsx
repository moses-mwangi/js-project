import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { clearCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);

  const {
    username,
    position,
    address,
    status: addressStatus,
    error: errorAddress,
  } = useSelector((store) => store.user);
  const { cart } = useSelector((state) => state.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority === true ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const formErr = useActionData();
  const dispatch = useDispatch();
  const isLoading = addressStatus === "loading";
  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h2 className=" mb-5 mt-4 text-xl font-semibold text-stone-700">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-stone-600 sm:basis-40">First Name</label>
          <div className=" grow">
            <input
              className=" w-full rounded-full border border-stone-200 px-4 py-2 text-sm  transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 md:px-6 md:py-3"
              type="text"
              name="customer"
              required
              defaultValue={username}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-stone-600 sm:basis-40">Phone number</label>
          <div className=" grow">
            <input
              className="w-full rounded-full  border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring  focus:ring-yellow-400 focus:ring-offset-2 md:px-6 md:py-3"
              type="tel"
              name="phone"
              required
            />
            {formErr?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErr.phone}
              </p>
            )}
          </div>
        </div>

        <div className=" relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-stone-600 sm:basis-40">Address</label>
          <div className=" grow">
            <input
              className="w-full rounded-full  border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring  focus:ring-yellow-400 focus:ring-offset-2 md:px-6 md:py-3"
              type="text"
              name="address"
              required
              disabled={isLoading}
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
            {!position.lat && !position.lng && (
              <Button
                disabled={isLoading}
                type="small"
                onclick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            )}
          </span>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className=" mb-8 mr-4 mt-2 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label className=" font-semibold text-slate-700" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting || isLoading
              ? "placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}

            {username}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "please give us your correct phone number. We might need it to contact you";
  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(clearCart());

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
