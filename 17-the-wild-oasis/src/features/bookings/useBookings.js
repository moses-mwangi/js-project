import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings, error, isLoading };
}

export default useBookings;
