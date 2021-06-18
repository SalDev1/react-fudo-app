import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <MainContainer>
      <HeadContent>
        <Headline>
          Who are <span>We</span> ?
        </Headline>
        <HeadParagraph>
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple
          needs. Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out
          at restaurants.{" "}
        </HeadParagraph>
        <HeadParagraph1>
          On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage and
          acquire customers to grow their business while also providing a
          reliable and efficient last mile delivery service. We also operate a
          one-stop procurement solution, Hyperpure, which supplies high quality
          ingredients and kitchen products to restaurant partners. We also
          provide our delivery partners with transparent and flexible earning
          opportunities.
        </HeadParagraph1>
      </HeadContent>
      <HeadContent>
        <Headline>Customers</Headline>
        <HeadParagraph>
          With your favorite restaurants at your fingertips, DoorDash satisfies
          your cravings and connects you with possibilities — more time and
          energy for yourself and those you love.
        </HeadParagraph>
      </HeadContent>
      <HeadContent>
        <Headline>Driving the force of assortment</Headline>
        <HeadParagraph>
          For over a decade now, we’ve been empowering our users in discovering
          new tastes and experiences across countries. By putting together
          meticulous information for our users, we enable them to make an
          informed choice.
        </HeadParagraph>
      </HeadContent>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const HeadContent = styled.div`
  margin: 20px 30px 20px 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  @media (mac-width: 768px) {
    margin-right: 0px;
  }
`;

const Headline = styled.h1`
  font-size: 40px;
  span {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeadParagraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const HeadParagraph1 = styled.p`
  padding-top: 10px;
  font-size: 16px;
`;

export default About;
