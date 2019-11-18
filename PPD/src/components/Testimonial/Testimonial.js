import React from "react";
import styled from "styled-components";
import { colors } from "../Utils/colors";
import quotes from "../../images/quotes.png";
import quotesbottom from "../../images/quotesbottom.png";

export const Testimonial = () => {
  return (
    <Section>
      <Top src={quotes} alt="opening quotation marks" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Bottom src={quotesbottom} alt="closing quotation marks" />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 40vh;
  background-color: ${colors.black};
  color: white;
  display: flex;
  align-items: center;
  position: relative;
`;

const Text = styled.p`
font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  color: white;
  text-align: center;
  margin: 0 auto;
  width: 50%;
`;

const Top = styled.img`
  position: absolute;
  top: 2rem;
  left: 20%;
  width: 10%;
  @media (max-width: 1180px) {
    left: 10%;
    width: 15%;
  }
  @media (max-width: 660px) {
    left: 5%;
  }
`;

const Bottom = styled.img`
  position: absolute;
  bottom: 2rem;
  right: 20%;
  width: 10%;
  @media (max-width: 1180px) {
    right: 10%;
    width: 15%;
  }
  @media (max-width: 660px) {
    right: 5%;
  }
`;
