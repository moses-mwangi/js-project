import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, increaseItem } from "./cartSlice";

function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const currentQuantity = cart.find(
    (item) => item.pizzaId === pizzaId,
  ).quantity;

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onclick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button type="round" onclick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
