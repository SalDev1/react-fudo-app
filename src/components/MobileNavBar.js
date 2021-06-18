import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { logoutOfApp } from "../features/counter/userSlice";
import { auth } from "../firebase";

const MobileNavBar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(logoutOfApp());
    auth.signOut();
  };

  return (
    <Container isOpen={isOpen}>
      <CloseIcon onClick={toggle}></CloseIcon>
      <AppHeader>
        <AppName>
          {" "}
          FU<span>DO</span>
        </AppName>
      </AppHeader>
      <NavBarOptions>
        <NavBarLink to="/">Home</NavBarLink>
        <NavBarLink to="/about">About</NavBarLink>
        <NavBarLink to="/menu">Menu</NavBarLink>
        <NavBarLink to="/cart">Cart</NavBarLink>
        <NavBarLink onClick={signOutHandler}>Sign Out</NavBarLink>
      </NavBarOptions>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  opacity: 0.8;
  flex-direction: column;
  padding-top: 30px;
  transition: 0.5s;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  .MuiSvgIcon-root {
    right: 15%;
    position: absolute;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const AppHeader = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-bottom: 15px;

  span {
    color: #ff3333;
  }
`;

const AppName = styled.h1`
  color: white;
`;

const NavBarOptions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavBarLink = styled(Link)`
  font-size: 22px;
  color: white;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;

  &:hover {
    color: #ff3333;
  }
`;

export default MobileNavBar;
