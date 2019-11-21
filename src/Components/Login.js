import React, { useState } from "react";
import axios from "axios";
import { NavLink, Button, Form, Label, Input, FormGroup } from "reactstrap";
import styled from "styled-components";
import Images from "../Images/Logo.png";
import withAuth from "../axios";

const LoginForm = styled.form`
  .topHalf {
    min-height: 50%;
    background-color: #e9e7e3;
  }
  img {
    max-height: 100px;
    max-width: 100px;
  }
  h2 {
    color: #fe0202;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    margin-right: 15%;
    padding-top: 20%;
  }
  button {
    color: #fe0202;
    width: 300px;
    height: 70px;
    border: 1px solid #fe0202;
    border-radius: 2rem;
    font-size: 36px;
  }
`;

//https://bw-better-professor-app-cmp.herokuapp.com/projects

const LogIn = props => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
    console.log(userData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    withAuth()
      .post(
        `https://bw-better-professor-app-cmp.herokuapp.com/auth/login`,
        userData
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        debugger;

        window.location.href = "/students";
      });
  };
  return (
    <LoginForm>
      <div className="topHalf">
        <img src={Images} alt="logo" />
        <h2>Sign In</h2>
      </div>

      <div className="bottomHalf">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="email"
              placeholder="  email address"
              value={userData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <br />
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="  password"
              value={userData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <NavLink to="/">
            <Button>Sign In</Button>
          </NavLink>
        </Form>
      </div>
    </LoginForm>
  );
};

export default LogIn;

//https://bw-better-professor-app-cmp.herokuapp.com/projects
