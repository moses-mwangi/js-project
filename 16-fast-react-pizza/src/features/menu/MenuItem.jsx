import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQuntityById } from "../cart/cartSlice";
import DeleteButton from "../cart/DeleteButton";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const quantityById = useSelector(getCurrentQuntityById(id));
  const isInCart = quantityById > 0;

  function handleAddCart(e) {
    const newItem = {
      pizzaId: id,
      name,
      totalPrice: unitPrice,
      quantity: 1,
      unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-65 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className=" font-medium text-stone-700">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto  flex items-center justify-between text-stone-500">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" text-sm font-medium uppercase">Sold out</p>
          )}

          <div className="flex items-center gap-6">
            {isInCart && <UpdateQuantity pizzaId={id} />}

            {!soldOut && !isInCart && (
              <Button type="small" onclick={handleAddCart}>
                Add To Cart
              </Button>
            )}
            {isInCart && <DeleteButton pizzaId={id} />}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
