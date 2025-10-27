"use client";
import { useState, useEffect } from "react";

type Image = {
  id: number;
  src: { medium: string, original: string };
  photographer: string;
};


export default function useImageSearch() {
  const [data, setData] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(query: string) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/search?q=${query}`);
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Error fetching images");

      setData(json.photos || []);
    } catch (err: unknown) {
      
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  // Help load some default images when the page first opens
  useEffect(() => {
    search("nature");
  }, []);


  return { data, loading, error, search };
}
