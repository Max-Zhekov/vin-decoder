import { useState } from "react";

type DecodeItem = { Variable: string; Value: string | null };
type DecodeResponse = { Message: string; Results: DecodeItem[] };

export const useVinDecoder = () => {
  const [data, setData] = useState<DecodeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const decode = async (vin: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${encodeURIComponent(vin)}?format=json`,
      );

      if (!res.ok) throw new Error("Request failed");

      const json = await res.json();
      setData(json);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, decode };
};
