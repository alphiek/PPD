import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import Logo from "./Logo";

export const PageTitle = () => {
  return (
    <ImageOverlay>
      <TextWrapper>
        <LogoWrapper>
          <Logo />
          <p className="name">Paphos Painter Decorators</p>
        </LogoWrapper>
        <h1>
          Peace of mind with <br />a quality finish
        </h1>
        <Divider />
        <p>
          At Paphos Painter Decorators we pride ourselves on our meticulous
          attention to detail and strict quality standards. Ensuring that
          nothing less than the utmost care and precision is applied to protect
          your home whilst creating a stunning finish for you to enjoy year
          after year. With a wealth of industry experience you're in safe hands.
        </p>
        <ContactButton>Find out more</ContactButton>
      </TextWrapper>
    </ImageOverlay>
  );
};

const ImageOverlay = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 500px;
  margin: 0 0 0 10%;
  @media (max-width: 768px) {
    width: 80%;
    margin-top: 80px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContactButton = styled.button`
  margin-top: 2rem;
  background-color: white;
  color: #3d3f43;
  font-weight: 600;
`;
