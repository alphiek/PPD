import React from "react";
import styled from "styled-components";
import { colors } from "../Utils/colors";
import { Dividers } from "../Dividers/Dividers";
import Form from "./Form";

export const Contact = () => {
  return (
    <Section id='contact'>
        <H2White>Contact Us</H2White>
        <Dividers />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          malesuada congue tincidunt. Vivamus et fringilla dolor.
        </Text>
      <Form />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 7% 10%;
  background-color: ${colors.black};
`;

const H2White = styled.h2`
  color: white;
`;

const Text = styled.p`
  color: white;
  width: 40%;
  padding-bottom: 1rem;
`;
