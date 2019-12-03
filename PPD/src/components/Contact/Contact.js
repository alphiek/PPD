import React from "react";
import styled from "styled-components";
import { colors } from "../Utils/colors";
import { Divider } from "../Utils/Divider";
import Form from "./Form";

export const Contact = () => {
  return (
    <Section id="contact">
      <H2White>Contact Us</H2White>
      <Divider />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada
        congue tincidunt. Vivamus et fringilla dolor.
      </Text>
      <Form />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 7% 15%;
  background-color: ${colors.darkGrey};
  @media (max-width: 1180px) {
    padding: 10% 15%;
  }
`;

const H2White = styled.h2`
  color: white;
`;

const Text = styled.p`
  color: white;
  width: 40%;
  padding-bottom: 1rem;
  @media (max-width: 1180px) {
    width: 100%;
  }
`;
