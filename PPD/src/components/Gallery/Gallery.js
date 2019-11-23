import React from "react";
import styled from "styled-components";
import { Divider } from "../Utils/Divider";
import { Location } from './Location'

export const Gallery = () => {
  return (
    <Section id='gallery'>
      <div>
        <h2>Project Gallery</h2>
        <Divider />
        <p>Check out some of our recent projects around the Paphos District</p>
      </div>
      <FlexParent>
        <LeftWrapper>
          <Location />
        </LeftWrapper>
        <RightWrapper>Right</RightWrapper>
      </FlexParent>
    </Section>
  );
};

const Section = styled.section`
  width: auto;
  height: 100vh;
  margin: 10%;
`;

const FlexParent = styled.div`
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 50%;
`;

const RightWrapper = styled.div`
  width: 50%;
`;
