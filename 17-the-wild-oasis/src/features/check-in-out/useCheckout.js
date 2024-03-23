import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
function useCheckOut() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} succesfully checked out`);
      queryClient.invalidateQueries({
        active: true,
        // queryKey: ["bookings"],
      });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckout };
}

export default useCheckOut;
