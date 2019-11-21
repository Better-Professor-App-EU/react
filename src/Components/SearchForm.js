import React, { useState } from "react";
import styled from "styled-components";

const searchBox = styled.form`
  border: 1px solid red;
  margin-bottom: 10px;
`;

const SearchForm = props => {
  return (
    <section className="search-form">
      <br />
      <br />
      <br />
      <br />
      <div className="SearchForm">
        <form>
          <input
            type="text"
            placeholder="Search Students"
            value={props.searchValue}
            onChange={props.inputSearch}
          />
          <br />
          <br />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
