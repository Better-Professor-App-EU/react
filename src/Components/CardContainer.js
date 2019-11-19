import React, { useState } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import StudentCard from "./StudentCard";
import SearchForm from "./SearchForm";

const Register = styled.section`
  background-color: grey;
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
        <SearchForm searchValue={searchValue} inputSearch={inputSearch} />
        <div>
          {filteredStuds.map(stud => {
            return (
              <StudentCard stud={stud} removeStudent={props.removeStudent} />
            );
          })}
        </div>
        {/* <CreateStudentButton />  */}
      </div>
    </Register>
  );
};

export default CardContainer;
