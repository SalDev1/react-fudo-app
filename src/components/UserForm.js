import React, { useState } from "react";
import styled from "styled-components";
import Image from "../images/6447.jpg";
import SignUp from "./SignUp";
import Login from "./Login";

const UserForm = () => {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <AppImageContainer>
        <AppImage src={Image} />
      </AppImageContainer>
      <AppContent>
        <AppName>
          FU<span>DO</span>
        </AppName>
        <AppButtons>
          <LoginButton toggle={toggle} onClick={toggleButton}>
            Login
          </LoginButton>
          <SignUpButton toggle={toggle} onClick={toggleButton}>
            Sign Up
          </SignUpButton>
        </AppButtons>
        <Forms>
          {!toggle ? (
            <>
              <Login></Login>
            </>
          ) : (
            <SignUp></SignUp>
          )}
        </Forms>
      </AppContent>
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin: 30px;
  flex-direction: row;
`;

const AppImage = styled.img`
  width: 600px;
  /* height: 50px; */
  @media (max-width: 1028px) {
    width: initial;
    display: none;
  }
`;

const AppImageContainer = styled.div`
  /* width: 100%; */
`;

const AppName = styled.h1`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  span {
    color: #ff3333;
  }
`;

const AppContent = styled.div`
  margin-left: 50px;
  border: none;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: initial;
    height: 100%;
    margin: 10px 20px 10px 20px;
    box-shadow: none;
  }
`;

const Forms = styled.div`
  width: 100%;
`;

const LoginButton = styled.button`
  font-size: 18px;
  border: none;
  color: black;
  padding: 15px;
  width: 100px;
  background-color: white;
  font-weight: 700;
  border-bottom: 3px solid ${({ toggle }) => (toggle ? "white" : "red")};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

const SignUpButton = styled.button`
  font-size: 18px;
  border: none;
  color: black;
  padding: 15px;
  width: 100px;
  background-color: white;
  font-weight: 700;
  border-bottom: 3px solid ${({ toggle }) => (toggle ? "red" : "white")};
  transition: all 500ms;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

const AppButtons = styled.div`
  margin: 10px 0px;
  width: 100%px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default UserForm;
