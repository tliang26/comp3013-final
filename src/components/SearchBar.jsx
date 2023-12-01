export default function SearchBar({ query, setQuery }) {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <hr />
    </>
  );
}