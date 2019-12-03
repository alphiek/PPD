import React, { useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "./Arrows";
import { Text } from "./Text";

export const Slider = ({ slides }) => {
  let [index, setIndex] = useState(0);

  const length = slides.edges.length - 1;

  const goToPrevSlide = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
    console.log(index);
  };

  const goToNextSlide = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };

  const { node } = slides.edges[index];

  return (
    <SliderContainer>
      <Image
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, " ").substring(2)}
      />
      <ArrowContainer>
        <LeftArrow goToPrevSlide={goToPrevSlide} />
        <RightArrow goToNextSlide={goToNextSlide} />
      </ArrowContainer>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ArrowContainer = styled.div`
  display: flex;
  margin: 1.5rem;
  justify-content: space-between;
`;

const Image = styled(Img)`
  height: 300px;
  width: 100%;
`;
