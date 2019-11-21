import React from "react";
import StudentData from "../data";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RegisterCard = styled.form`
  width: 100%;
  background: #e9e7e3;
  border: 1px solid #c4c4c4;
  div {
    display: flex;
    justify-content: space-around;
    align-itmes: center;
  }
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 21px;
    color: #fe0202;
  }
  h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
  }
  btn {
    background: white;
    margin-bottom: 5px;
    min-width: 35%;
    box-shadow: 0 1px 1px
    text-decoration: none;
    color: grey;
  }
  btn:hover {
    cursor: pointer;
    border: 1px solid #fe0202;
  }
`;

const StudentCard = props => {
  const { id, name } = props.stud;

  return (
    <RegisterCard>
      <h1>{name}</h1>
      <div>
        <Link to={`/students/${id}`}>
          <btn className="dashboardBtn">View Dashboard</btn>
        </Link>
        <btn onClick={() => props.removeStudent(id)} className="delete">
          Delete
        </btn>
      </div>
    </RegisterCard>
  );
};

export default StudentCard;
