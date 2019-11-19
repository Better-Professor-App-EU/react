import React, { useState } from "react";

const SearchForm = props => {
  return (
    <section className="search-form">
      <div className="SearchForm">
        <form>
          <input
            type="text"
            placeholder="search"
            value={props.searchValue}
            onChange={props.inputSearch}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
