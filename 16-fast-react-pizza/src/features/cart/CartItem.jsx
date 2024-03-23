import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import DeleteButton from "./DeleteButton";
import UpdateQuantity from "./UpdateQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 text-stone-600 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold text-stone-700">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateQuantity pizzaId={pizzaId} />
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
