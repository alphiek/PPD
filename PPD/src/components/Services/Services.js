import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { Icons } from "../Icons/Icons";
import elevation from "../Utils/elevation";
import { servicesCopy } from "./servicesCopy";

export const Services = () => {
  const data = servicesCopy;
  let services;

  if (data) {
    services = data.map((e, i) => (
      <FlexItem key={i}>
        <TextWrapper color={e.color}>
          <Icons icon={e.icon} />
          <h3>{e.title}</h3>
        </TextWrapper>
        <Border color={e.color}>
          <p>{e.body}</p>
          <HR />
          <button>Some CTA</button>
        </Border>
      </FlexItem>
    ));
  }

  return (
    <Section id="services">
      <div>
        <h2>Our Services and Skills</h2>
        <Divider />
        <p>
          Over the years we have grown our expertise to expand over a broad range of skills suited perfectly to the Paphos climate & materials.
        </p>
        <p>
        Check out what we do best below!
        </p>
      </div>
      <FlexContainer>{services}</FlexContainer>
      <Icons icon="circle" />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: #fafafa;
  padding: 10%;
  overflow-x: hidden;
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;
  z-index: 20;
`;

const FlexItem = styled.div`
  width: 33%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: ${props => props.color};
`;

const TextWrapper = styled.div`
  position: relative;
  top: 2rem;
  padding: 1rem;
  background-color: ${props => props.color};
  ${elevation[3]};
`;

const Border = styled.div`
  background: white;
  padding: 4rem 2rem 3rem;
  text-align: left;
  border-top: 4px solid ${props => props.color};
  ${elevation[3]};
  min-height: 260px;
`;

const HR = styled.hr`
  background-color: lightgray;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  border: none;
`;
