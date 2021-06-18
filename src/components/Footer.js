import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterContent>
          <FooterLogo>
            FU<span>DO</span>
          </FooterLogo>
        </FooterContent>
        <FooterOptions>
          <FooterHeadLink>Support</FooterHeadLink>
          <FooterLink>Account Details</FooterLink>
          <FooterLink>Order History</FooterLink>
        </FooterOptions>
        <FooterOptions>
          <FooterHeadLink>Top Cuisines Near Me</FooterHeadLink>
          <FooterLink>Pizza Near Me</FooterLink>
          <FooterLink>Chinese Cuisine Near Me</FooterLink>
          <FooterLink>Sushi Near Me</FooterLink>
          <FooterLink>Cafe Near Me</FooterLink>
          <FooterLink>Lunch Near Me</FooterLink>
        </FooterOptions>
        <FooterOptions>
          <FooterHeadLink>Top Cities</FooterHeadLink>
          <FooterLink>New York</FooterLink>
          <FooterLink>Los Angles</FooterLink>
          <FooterLink>London</FooterLink>
          <FooterLink>India</FooterLink>
          <FooterLink>Tornoto</FooterLink>
          <FooterLink>Canada</FooterLink>
        </FooterOptions>
        <FooterOptions>
          <FooterHeadLink>Get to know us</FooterHeadLink>
          <FooterLink>About</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Investors</FooterLink>
          <FooterLink>Company Blog</FooterLink>
        </FooterOptions>
      </FooterMain>
      <FooterSubMain>
        <FooterSocials>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </FooterSocials>
        <FooterTerms>Terms and Conditions</FooterTerms>
        <FooterTerms>Privacy Policy</FooterTerms>
        <FooterTerms>@Copyright FUDO</FooterTerms>
      </FooterSubMain>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 30px;
  background-color: #303030;
  display: flex;
  flex-direction: column;

  @media (max-width: 478px) {
    padding: 30px 10px 30px 10px;
  }
`;

const FooterMain = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterLogo = styled.h1`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  color: white;

  span {
    color: red;
  }
`;

const FooterOptions = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const FooterHeadLink = styled.h3`
  padding-bottom: 10px;
  margin-top: 5px;
  font-size: 18px;
`;

const FooterLink = styled.a`
  padding-bottom: 8px;
  outline-width: 0px;
  color: #b3b3b3;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const FooterSubMain = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 476px) {
    grid-gap: 25px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const FooterSocials = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: white;
    width: 30px;
    height: 30px;
    padding-right: 10px;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

const FooterTerms = styled.p`
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #b3b3b3;
  }
`;

export default Footer;
