import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabine as deleteCabineApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabine } = useMutation({
    mutationFn: (id) => deleteCabineApi(id),
    onSuccess: () => {
      toast.success("cabin succesfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isDeleting, deleteCabine };
}

export default useDeleteCabin;
