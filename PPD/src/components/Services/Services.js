import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";

export const Services = () => {
  return (
    <Section id="services">
      <div>
        <h2>Our Services and Skills</h2>
        <Divider />
        <p>Take a look at our skills and services</p>
      </div>
      <FlexContainer>
        <FlexItem>Service 1</FlexItem>
        <FlexItem>Service 1</FlexItem>
        <FlexItem>Service 1</FlexItem>
        <FlexItem>Service 1</FlexItem>
        <FlexItem>Service 1</FlexItem>
      </FlexContainer>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  padding: 10%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid black;
  margin-top: 4rem;
`;

const FlexItem = styled.div`
  width: 20%;
  display: flex;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
