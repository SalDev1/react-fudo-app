import React from "react";
import styled from "styled-components";
import FoodImage from "../images/food-hero.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useHistory } from "react-router-dom";

const HeroSection = () => {
  const history = useHistory();

  return (
    <HeroContainer>
      <HeroContent>
        <HeroHeadline>Have your Food Delivered in just 30 mins</HeroHeadline>
        <HeroParagraph>
          Our job is to fill your tummy with delicious food and with fast and
          free delivery.
        </HeroParagraph>
        <HeroButtons>
          <CTAButton1 onClick={() => history.push("/menu")}>
            Get Started
          </CTAButton1>
          <CTAButton2>
            <PlayArrowIcon />
            Watch Video
          </CTAButton2>
        </HeroButtons>
      </HeroContent>
      <HeroPic>
        <HeroImage src={FoodImage} />
      </HeroPic>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100%;
  width: 500px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 40px;
  color: black;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroParagraph = styled.p`
  padding-top: 10px;
  font-size: 16px;
  color: gray;
  line-height: 1.6em;
`;

const HeroPic = styled.div`
  margin-top: 50px;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 478px) {
    width: 300px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const CTAButton1 = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ff3333;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    transition: all 0.5s;
    transform: scale(1.1);
  }
`;

const CTAButton2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #ffeded;
  color: #ff3333;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;

  .MuiSvgIcon-root {
    margin-right: 4px;
  }

  &:hover {
    transition: all 0.5s;
    transform: scale(1.1);
  }
`;

export default HeroSection;
