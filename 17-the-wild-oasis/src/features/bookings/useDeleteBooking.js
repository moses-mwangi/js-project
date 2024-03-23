import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deletingBooking, isLoading: isDeletingBooking } = useMutation(
    {
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success("Booking  succefully deleted");
        queryClient.invalidateQueries({
          active: true,
        });
      },
      onError: () => {},
    }
  );

  return { deletingBooking, isDeletingBooking };
}

export default useDeleteBooking;
