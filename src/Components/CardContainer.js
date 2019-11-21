import React, { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import StudentCard from "./StudentCard";
import SearchForm from "./SearchForm";
import CreateStudent from "./CreateStudent";

const Register = styled.section`
  background-color: white;
  .createSearch {
    border-top: 1px solid #fe0202;
    display: flex;
    justify-content: space-around;
    max-height: 100px;
  }
  .listTitle {
    border-top: 1px solid #fe0202;
  }
  .searchForm {
    margin-top: 100px;
  }
`;

const CardContainer = props => {
  const [searchValue, setSearchValue] = useState("");

  const inputSearch = e => {
    setSearchValue(e.target.value);
  };
  console.log(props);

  let filteredStuds = props.students.filter(Boolean).filter(student => {
    return student.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  return (
    <Register>
      <div className="createSearch">
        <SearchForm
          classname="searchForm"
          searchValue={searchValue}
          inputSearch={inputSearch}
        />
        <CreateStudent className="createStudent" />
      </div>
      <br />
      <br />
      <h1 className="listTitle">List of students</h1>
      <div>
        {filteredStuds.map(stud => {
          return (
            <StudentCard stud={stud} removeStudent={props.removeStudent} />
          );
        })}
      </div>
    </Register>
  );
};

export default CardContainer;
