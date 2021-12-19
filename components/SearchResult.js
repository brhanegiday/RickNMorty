import React from "react";

function SearchResult({ searchResults }) {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        width: "50%",
        margi: "auto",
        padding: "1rem",
      }}
    >
      {searchResults.characterName}
    </div>
  );
}

export default SearchResult;
