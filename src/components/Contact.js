import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = () => {
  const API_KEY = process.env.REACT_APP_CONTACT_API_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ihofvnb", "template_d4phqv4", e.target, `${API_KEY}`)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactSection>
      <ContactHeadline>Have any Questions ?</ContactHeadline>
      <ContactForm onSubmit={sendEmail}>
        <FirstName
          name="firstName"
          type="text"
          placeholder="Your First Name"
          required
        />
        <LastName
          name="lastName"
          type="text"
          placeholder="Your Last Name"
          required
        />
        <Email name="email" type="email" placeholder="Your Email" required />
        <Message
          name="message"
          type="text"
          placeholder="Your Message"
          required
        ></Message>
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  width: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
`;

const ContactHeadline = styled.h1`
  font-size: 45px;
  text-align: center;
`;

const ContactForm = styled.form`
  width: 440px;
  margin: 20px 0px 40px 0px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: initial;
    box-shadow: none;
  }
`;

const FirstName = styled.input`
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
  outline-width: 0px;
  border-radius: 20px;
  border-width: 1px;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const LastName = styled.input`
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
  outline-width: 0px;
  border-radius: 20px;
  border-width: 1px;
`;

const Email = styled.input`
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
  outline-width: 0px;
  border-radius: 20px;
  border-width: 1px;
`;

const Message = styled.textarea`
  font-family: Lato;
  padding: 10px 20px 10px 20px;
  height: 100px;
  outline-width: 0px;
  border-radius: 10px;
  border-width: 1px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  border-width: 0px;
  background-color: #ff3333;
  color: white;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export default Contact;
