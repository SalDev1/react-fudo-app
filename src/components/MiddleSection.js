import React from "react";
import styled from "styled-components";
import Image1 from "../images/bermuda-order-completed.png";
import Image2 from "../images/arabica-99.png";
import Image3 from "../images/arabica-1027.png";

const MiddleSection = () => {
  return (
    <SectionContainer>
      <SectionHeadlines>
        <SectionTitle>What we serve</SectionTitle>
        <SectionSubTitle>Your Favourite Food Delivery Partner</SectionSubTitle>
      </SectionHeadlines>
      <SectionCards>
        <SectionCard>
          <CardImage src={Image1} />
          <CardTitle>Best Chefs</CardTitle>
        </SectionCard>
        <SectionCard>
          <CardImage src={Image2} />
          <CardTitle>Hot Served Food (98°C)</CardTitle>
        </SectionCard>
        <SectionCard>
          <CardImage src={Image3} />
          <CardTitle>Choose your Mood Food</CardTitle>
        </SectionCard>
      </SectionCards>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
`;

const SectionHeadlines = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: #ff3333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.4em;
`;

const SectionSubTitle = styled.h1`
  padding-top: 10px;
  color: #2b2b2b;
  font-size: 55px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionCards = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #ff3333;
  color: white;
  margin: 20px;

  &:hover {
    transition: all 0.5s;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    width: initial;
    margin: 0px 30px 30px 0px;
  }
`;

const CardImage = styled.img`
  padding: 10px;
  width: 70%;
  height: 50%;
`;

const CardTitle = styled.h1`
  padding: 20px 0px;
  font-size: 18px;
  text-align: center;
`;

export default MiddleSection;
