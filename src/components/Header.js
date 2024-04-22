import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="./images/newlogo.jpeg"
          alt="my logo img"
          className="logoedit"
        />
        <h3 className="logoText">ShopFusion</h3>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 10rem;
  }

  .logoedit {
    width: 7rem;
    border-radius: 100rem;
  }
  .logoText {
    font-weight: 700;
    color: #000;
    transform: translateX(-0.8rem);
  }
`;
export default Header;
