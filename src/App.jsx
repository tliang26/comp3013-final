import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsList from "./components/ResultsList";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>List of Foods</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <ResultsList query={query} />
    </>
  );
}