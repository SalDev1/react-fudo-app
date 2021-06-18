import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginToApp } from "../features/counter/userSlice";
import { auth } from "../firebase";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        dispatch(
          loginToApp({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <LoginForm>
      <LoginEmail
        value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></LoginEmail>
      <LoginPassword
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></LoginPassword>
      <LoginCheckBox>
        <input type="checkbox" />
        <span>I accept all the terms and conditions</span>
      </LoginCheckBox>
      <LoginSubmitButton onClick={loginHandler}>Log In</LoginSubmitButton>
    </LoginForm>
  );
};

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const LoginEmail = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;

const LoginPassword = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;

const LoginSubmitButton = styled.button`
  margin: 10px;
  width: 100%;
  border-radius: 4px;
  outline-width: 0px;
  color: white;
  background-color: #ff3333;
  border: none;
  padding: 10px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #d63131;
  }
`;

const LoginCheckBox = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 10px;
  }
`;

export default Login;
