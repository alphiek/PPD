import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { Icons } from "../Icons/Icons";
import { servicesCopy } from "./servicesCopy";

export const Services = () => {
  const data = servicesCopy;
  let services;

  if (data) {
    services = data.map((e, i) => (
      <FlexItem key={i}>
        <Icons icon={e.icon} />
        <h3>{e.title}</h3>
        <p>{e.body}</p>
      </FlexItem>
    ));
  }

  return (
    <Section id="services">
      <div>
        <h2>Our Services and Skills</h2>
        <Divider />
        <p>Take a look at our skills and services</p>
      </div>
      <FlexContainer>{services}</FlexContainer>
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
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
