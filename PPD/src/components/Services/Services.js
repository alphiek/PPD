import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";

export const Services = () => {
  return (
    <Section id='services'>
      <div>
        <h2>Our Services and Skills</h2>
        <Divider />
        <p>Take a look at our skills and services</p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

const TextWrapperRight = styled.div`
  margin: 10% 10%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
