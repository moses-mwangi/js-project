import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabine } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabine(newCabinData, id),
    onSuccess: () => {
      toast.success("cabin succesfully edited");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}

export default useEditCabin;
