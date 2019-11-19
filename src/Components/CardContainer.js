import React from "react";
import styled from "styled-components";

import StudentCard from "./StudentCard";

const Register = styled.section`
  background-color: grey;
`;

const CardContainer = props => {
  return (
    <Register>
      <div className="createSearch">
        {/* <SearchContainer />
        <CreateStudentButton /> */}
      </div>
      {props.students
        ? props.students.map((stud, index) => (
            <StudentCard key={index} stud={stud} />
          ))
        : null}{" "}
    </Register>
  );
};

export default CardContainer;
