import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginToApp } from "../features/counter/userSlice";
import { auth } from "../firebase";

const SignUp = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            loginToApp({
              email: userAuth.user.email,
              password: userAuth.user.password,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
        .then(() => alert("User has been created successfully."))
        .catch((error) => alert(error.message))
    );

    setName("");
    setEmail("");
    setPassword("");
    setProfilePic("");
  };

  return (
    <SignUpForm>
      <SignUpName
        value={name}
        type="text"
        placeholder="Your Full Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <SignUpPic
        value={profilePic}
        type="text"
        placeholder="Profile Pic (Url)"
        onChange={(e) => {
          setProfilePic(e.target.value);
        }}
        required
      />
      <SignUpEmail
        value={email}
        type="text"
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <SignUpPassword
        value={password}
        type="password"
        placeholder="Your Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <CheckBox>
        <input type="checkbox" />
        <span>I accept all the terms and conditions</span>
      </CheckBox>
      <SignUpButton onClick={signUpHandler}>Sign up</SignUpButton>
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 30px 30px 30px;
`;

const SignUpName = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;
const SignUpPic = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;

const SignUpEmail = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;

const SignUpPassword = styled.input`
  padding: 10px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
  outline-width: 0px;
  border: 1px solid black;
`;

const SignUpButton = styled.button`
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

const CheckBox = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 10px;
  }
`;

export default SignUp;
