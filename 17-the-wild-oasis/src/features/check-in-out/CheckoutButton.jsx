import Button from "../../ui/Button";
import useCheckOut from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckout } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
