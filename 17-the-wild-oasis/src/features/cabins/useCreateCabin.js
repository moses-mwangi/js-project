import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabine } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabine,
    onSuccess: () => {
      toast.success("cabin succesfully created");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isCreating,
    createCabin,
  };
}

export default useCreateCabin;
