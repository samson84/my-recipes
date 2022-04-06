import React from "react";
import { SearchResult } from "../useRecipeSearch";

type ResultProps = {
  results: SearchResult[];
};

const Result = ({ results }: ResultProps) => (
  <ul>
    {results.map((result) => (
      <li key={result.id}>
        <strong>{result.title}</strong>
        <em>(Relevance, {result.relevance})</em>
      </li>
    ))}
  </ul>
);

export default Result;
