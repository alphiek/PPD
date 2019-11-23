import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { colors } from "../Utils/colors";

export const Gallery = () => {
  const [expand, setExpanded] = useState("0");

  const toggleActive = e => {
    console.log(e.target.id);
    e.target.id === expand ? setExpanded("0") : setExpanded(e.target.id);
  };

  const isExpanded = id => (expand === id ? true : false);

  return (
    <Section id="gallery">
      <GridParent>
        <ProjectOne isActive={isExpanded("1")} onClick={toggleActive} id="1">
          One
        </ProjectOne>
        <ProjectTwo isActive={isExpanded("2")} onClick={toggleActive} id="2">
          Two
        </ProjectTwo>
        <TitleWrapper state={expand}>
          <div>
            <h2>Project Gallery</h2>
            <Divider />
            <p>
              Check out some of our recent projects around the Paphos District
            </p>
          </div>
        </TitleWrapper>
        <ProjectThree
          isActive={isExpanded("3")}
          onClick={toggleActive}
          id="3"
        >
          Four
        </ProjectThree>
      </GridParent>
    </Section>
  );
};

const Section = styled.section`
  width: auto;
  margin: 15%;
`;

const GridParent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(350px, auto);
  grid-gap: 1%;
  grid-auto-flow: dense;
  margin: 5% 0;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  grid-column: ${props => (props.isActive ? "span 4" : "span 2")};
  grid-row: ${props => (props.isActive ? "span 2" : "span 1")};
`;

const ProjectOne = styled(Flex)`
`;

const ProjectTwo = styled(Flex)`
`;

const ProjectThree = styled(Flex)`
`;

const TitleWrapper = styled.div`
  grid-column: ${props => props.state !== '0' ? 'span 4' : 'span 2'};
  order: ${props => props.state !== '0' ? '4' : ''};
  grid-row: span 1;
  display: flex;
  border: 6px solid ${colors.orange};
  justify-content: center;
  align-items: center;
  padding: 0 10% 0 15%;
`;
