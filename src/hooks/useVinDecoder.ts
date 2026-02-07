import { useState } from "react";

type DecodeItem = { Variable: string; Value: string | null };
type DecodeResponse = { Message: string; Results: DecodeItem[] };

const LS_KEY = "vin_history";

function saveVinToHistory(vin: string) {
  const raw = localStorage.getItem(LS_KEY);
  const prev: string[] = raw ? JSON.parse(raw) : [];

  const next = [vin, ...prev.filter((x) => x !== vin)].slice(0, 3);
  localStorage.setItem(LS_KEY, JSON.stringify(next));

  return next;
}

export const useVinDecoder = () => {
  const [data, setData] = useState<DecodeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>(() => {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  });

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
      const nextHistory = saveVinToHistory(vin);
      setHistory(nextHistory);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, decode, history };
};
