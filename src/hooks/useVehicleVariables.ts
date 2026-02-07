import { useQuery } from "@tanstack/react-query";
import { fetchVehicleVariables } from "../api/variables";

export function useVehicleVariablesQuery() {
  return useQuery({
    queryKey: ["vehicleVariables"],
    queryFn: fetchVehicleVariables,
    staleTime: 1000 * 60 * 10,
  });
}
