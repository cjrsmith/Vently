import React from "react";

const Search = ({ value, onSearch }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name="query"
        value={value}
        onChange={(e) => onSearch(e.currentTarget.value)}
        placeholder="Search..."
        className="form-control my-3"
      />
    </div>
  );
};

export default Search;
