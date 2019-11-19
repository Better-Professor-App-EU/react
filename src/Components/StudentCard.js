import React from "react";
import StudentData from "../data";
import styled from "styled-components";

const RegisterCard = styled.form`
  width: 400px;
  background: #e9e7e3;
  border: 1px solid #c4c4c4;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #fe0202;
  }
`;

const StudentCard = StudentData => {
  return (
    <RegisterCard>
      <h1>Student Name</h1>
    </RegisterCard>
  );
};

export default StudentCard;
