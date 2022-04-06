import React, { useState } from "react";
import { useRecipeSearch } from "../useRecipeSearch";
import Result from "./Result";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const { result, error, loading, search } = useRecipeSearch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchValue(event.currentTarget.value);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    search(searchValue);
    setSearchValue("");
  };

  const disabled = searchValue === "" || loading;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="ingredients split by comma"
        />
        <button type="submit" disabled={disabled}>
          Search For Reciepes
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong :(</div>}
      {result && <Result results={result} />}
    </>
  );
};

export default App;
