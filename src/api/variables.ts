export type VehicleVariable = {
  ID: number;
  Name: string;
  Description: string;
};

export type VariablesResponse = {
  Results: VehicleVariable[];
};

export async function fetchVehicleVariables(): Promise<VariablesResponse> {
  const res = await fetch(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json",
  );

  if (!res.ok) throw new Error("Request failed");
  return (await res.json()) as VariablesResponse;
}
