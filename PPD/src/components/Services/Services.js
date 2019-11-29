import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { Icons } from "../Icons/Icons";
import elevation from "../Utils/elevation";
import { servicesCopy } from "./servicesCopy";
import table from "../../images/table.jpg";

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
        </Border>
      </FlexItem>
    ));
  }

  return (
    <Section id="services">
      <TextRight>
        <h2>Our Services and Skills</h2>
        <Divider />
        <BodyRight>
          Over the years we have grown our expertise to expand over a broad
          <br />
          range of skills suited perfectly to the Paphos climate & materials.
        </BodyRight>
        <SubtextRight>Check out what we do best below!</SubtextRight>
      </TextRight>
      <FlexContainer>{services}</FlexContainer>
      <Table src={table} alt="picture of a living room" />
      <Icons icon="circle" />
      <BottomCircle />
    </Section>
  );
};

const BodyRight = styled.p`
  text-align: right;
`;

const SubtextRight = styled(BodyRight)`
  font-weight: bolder;
  margin-top: 2.5rem;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 10%;
  overflow: hidden;
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
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

const TextRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 5%;
`;

const Table = styled.img`
  position: absolute;
  top: 40%;
  left: -8rem;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  object-fit: cover;
  object-position: center;
`;

const BottomCircle = styled.div`
  background: lightgray;
  position: absolute;
  bottom: -10rem;
  right: -10rem;
  border-radius: 50%;
  height: 500px;
  width: 500px;
`;
