import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteItem(pizzaId));
    console.log(pizzaId, "mosesssssssssssss");
  }

  return (
    <Button type="small" onclick={() => handleDelete()}>
      Delete
    </Button>
  );
}

export default DeleteButton;
