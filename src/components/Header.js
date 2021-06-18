import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, logoutOfApp } from "../features/counter/userSlice";
import { auth } from "../firebase";
import MenuIcon from "@material-ui/icons/Menu";

function Header({ toggle }) {
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const history = useHistory();

  const signOutHandler = () => {
    dispatch(logoutOfApp());
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <HeaderLogo onClick={() => history.push("/")}>
        FU<span>DO</span>
      </HeaderLogo>
      <HeaderOptions>
        <HeaderLink to="/">
          Home<hr></hr>
        </HeaderLink>
        <HeaderLink to="/about">
          About<hr></hr>
        </HeaderLink>
        <HeaderLink to="/menu">
          Menu<hr></hr>
        </HeaderLink>
        <HeaderLink to="/contact">
          Contact<hr></hr>
        </HeaderLink>
        <HeaderLink to="/cart">
          Cart<hr></hr>
        </HeaderLink>
      </HeaderOptions>
      <HeaderUser onClick={signOutHandler}>
        <UserProfile alt={user?.name} src={user?.photoUrl}></UserProfile>
        <UserName>{user?.name}</UserName>
      </HeaderUser>
      <HeaderMobileMenu onClick={toggle}>
        <MenuIcon></MenuIcon>
      </HeaderMobileMenu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding: 0px 25px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0px;
    justify-content: space-around;
    align-items: center;
  }
`;

const HeaderLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  span {
    color: #ff3333;
  }
`;

const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderLink = styled(Link)`
  font-size: 16px;
  outline-width: 0px;
  text-decoration: none;
  color: black;
  padding: 0 20px;
  font-weight: 400;

  hr {
    border: 1px solid red;
    opacity: 0;
    border-radius: 5px;
    background-color: red;
  }

  &:hover {
    color: #5e5e5e;

    hr {
      opacity: 1;
      width: initial;
      transition: ease-in-out 500ms;
      transform: scaleX(1.08);
    }
  }
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0.5)
  );
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

  .MuiAvatar-root {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserProfile = styled(Avatar)`
  width: 20px;
  height: 20px;
`;

const UserName = styled.h3`
  padding-left: 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #5e5e5e;
  }
`;

const HeaderMobileMenu = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  text-align: center;
  border: 1px solid #a8a8a8;
  border-radius: 4px;

  .MuiSvgIcon-root {
    padding: 8px;
    color: #ff3333;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    cursor: pointer;
  }
`;

export default Header;
