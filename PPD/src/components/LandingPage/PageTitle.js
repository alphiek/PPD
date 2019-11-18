import React from "react";
import styled from "styled-components";
import { Dividers } from "../Dividers/Dividers";

export const PageTitle = () => {
  return (
    <div>
      <TitleContainer>
        <h1>
          Peace of mind with <br />a quality finish
        </h1>
        <Dividers />
      </TitleContainer>
      <TextWrapper>
        <p>
          At Paphos Painter Decorators we pride ourselves on our meticulous
          attention to detail and strict quality standards. Ensuring that
          nothing less than the utmost care and precision is applied to protect
          your home whilst creating a stunning finish for you to enjoy year
          after year. With a wealth of industry experience you're in safe hands.
        </p>
        <ContactButton>Find out more</ContactButton>
      </TextWrapper>
    </div>
  );
};

const TitleContainer = styled.div`
  width: 70%;
  margin-left: 10%;
`;

const TextWrapper = styled.div`
  width: 23%;
  margin: 0 0 0 10%;
  @media (max-width: 1180px) {
    width: 100%;
    background-color: white;
    margin: 0;
    padding: 4rem;
  }
`;

const ContactButton = styled.button`
  margin-top: 2rem;
  background-color: white;
  color: #3d3f43;
  font-weight: 600;
`;

