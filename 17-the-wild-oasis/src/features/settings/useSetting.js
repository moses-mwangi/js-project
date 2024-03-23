import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSetting() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { error, settings, isLoading };
}

export default useSetting;
