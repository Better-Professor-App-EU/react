import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Images from "../Images/Logo.png";

const HeaderStyles = styled.header`
  background-color: #e9e7e3;
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  h1 {
    margin-top: 1.8rem;
    color: #fe0202;
  }
  img {
    padding-top: 10px;
    padding-left: 20px;
    max-width: 80px;
    max-height: 80px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 25%;
  align-content: center;

  a {
    text-decoration: none;
    color: #fe0202;
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="logo">
        <img src={Images} alt="logo" />
      </div>
      <NavBar>
        <Link to href="/">
          Home
        </Link>
        <Link to href="logout">
          Log Out
        </Link>
      </NavBar>
    </HeaderStyles>
  );
};

export default Header;
