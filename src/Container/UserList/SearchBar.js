import React from "react";

export default function SearchBar({ searchText }) {
    
  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search User"
        className="search-bar"
        onChange={searchText}
      />
    </div>
  );
}
