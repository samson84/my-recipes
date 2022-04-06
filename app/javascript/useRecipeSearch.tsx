import { useState, useEffect } from "react";

export type SearchResult = {
  id: number;
  title: string;
  relevance: number;
};

export const useRecipeSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<SearchResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const task = async () => {
      setError(null);
      setLoading(true);
      setResult(null);
      try {
        const response = await fetch(`/recipes/search?query=${query}`);
        const data = await response.json();
        setResult(data.searchResult);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("unknown_error");
        }
      } finally {
        setLoading(false);
      }
    };
    if (query !== "") {
      task();
    }
  }, [query]);

  return { result, error, loading, search: (query: string) => setQuery(query) };
};
