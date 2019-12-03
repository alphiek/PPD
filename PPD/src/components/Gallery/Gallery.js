import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { colors } from "../Utils/colors";
import { Icons } from "../Icons/Icons";
import { Polemi } from "../Slider/Polemi";
import { Mesogi } from "../Slider/Mesogi";
import { Paphos } from "../Slider/Paphos";
import elevation from "../Utils/elevation";
import { Text } from "../Slider/Text";

export const Gallery = () => {
  const [showing, setShowing] = useState("0");
  const isShowing = id => (showing === id ? true : false);

  const toggleActive = e => {
    e.target.id === showing ? setShowing("0") : setShowing(e.target.id);
  };

  return (
    <Section id="gallery">
      <GridParent>
        <ProjectOne isActive={isShowing("1")}>
          <Polemi />
          {showing === "1" && <Text showing={showing} />}
          <Button onClick={toggleActive} id="1">
            {showing === "1" ? "close" : "view project info"}
          </Button>
        </ProjectOne>
        <ProjectTwo isActive={isShowing("2")}>
          <Mesogi />
          {showing === "2" && <Text showing={showing} />}
          <Button onClick={toggleActive} id="2">
            {showing === "2" ? "close" : "view project info"}
          </Button>
        </ProjectTwo>
        <TitleWrapper state={showing}>
          <div>
            <h2>Project Gallery</h2>
            <Divider />
            <p>
              Check out some of our recent projects
              <br />
              around the Paphos District
            </p>
          </div>
        </TitleWrapper>
        <ProjectThree isActive={isShowing("3")}>
          <Paphos />
          {showing === "3" && <Text showing={showing} />}
          <Button onClick={toggleActive} id="3">
            {showing === "3" ? "close" : "view project info"}
          </Button>
        </ProjectThree>
      </GridParent>
      <Icons icon="circle" />
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: auto;
  padding: 10% 15%;
  overflow: hidden;
`;

const GridParent = styled.div`
  background: white;
  display: grid;
  z-index: 20;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 3%;
  grid-auto-flow: dense;
  margin: 5% 0;
`;

const Flex = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  grid-column: ${props => (props.isActive ? "span 4" : "span 2")};
  grid-row: ${props => (props.isActive ? "span 2" : "span 1")};
  cursor: pointer;
  ${elevation[3]};
  position: relative;
`;

const ProjectOne = styled(Flex)``;

const ProjectTwo = styled(Flex)``;

const ProjectThree = styled(Flex)``;

const TitleWrapper = styled.div`
  grid-column: ${props => (props.state !== "0" ? "span 4" : "span 2")};
  order: ${props => (props.state !== "0" ? "4" : "")};
  grid-row: span 1;
  display: flex;
  border: 6px solid ${colors.orange};
  align-items: center;
  padding: 0 10% 0 15%;
`;

const Button = styled.button`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  text-transform: uppercase;
  font-weight: bolder;
  color: ${colors.black};
  border-top: 1px solid ${colors.orange};
`;
