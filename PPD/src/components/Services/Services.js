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
        </TextWrapper>
        <Border color={e.color}>
          <h3>{e.title}</h3>
          <p>{e.body}</p>
          <HR color={e.color} />
          <CTA>
            Some CTA <Arrow>&#x219C;</Arrow>
          </CTA>
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
          Over the years we have grown our expertise to expand over a broad
          range of skills suited perfectly to the Paphos climate & materials.
        </p>
        <p>Check out what we do best below!</p>
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
  overflow: hidden;
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  z-index: 20;
`;

const FlexItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  width: 70%;
`;

const TextWrapper = styled.div`
  background-color: ${props => props.color};
  padding: 1rem;
  ${elevation[3]};
`;

const Border = styled.div`
  padding: 0 2rem;
`;

const HR = styled.hr`
  background-color: ${props => props.color};
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  border: none;
`;

const CTA = styled.a`
  font-size: 0.8rem;
  text-transform: uppercase;
  float: right;
  font-weight: 900;
  letter-spacing: 3px;
  opacity: 0.6;
`;

const Arrow = styled.span`
  font-size: 1.2rem;
`;
