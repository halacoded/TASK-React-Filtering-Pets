import React from "react";

export const SearchBar = ({ setQuery }) => {
  const handelSearch = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      {" "}
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handelSearch}
        />
      </div>
    </div>
  );
};
