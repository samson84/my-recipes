import React, { useEffect, useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const task = async () => {
      setError(null);
      setLoading(false);
      try {
        const response = await fetch(`/recipes/search?query=${query}`);
        const data = await response.json();
        setResult(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query !== "") {
      task();
    }
  }, [query]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchValue(event.currentTarget.value);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setQuery(searchValue);
    setSearchValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="ingredients split by comma"
        />
        <button type="submit" disabled={searchValue === ""}>
          Search For Reciepes
        </button>
      </form>
      <pre>{loading ? "loading" : ""}</pre>
      <pre>{error?.message}</pre>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
};

export default App;
