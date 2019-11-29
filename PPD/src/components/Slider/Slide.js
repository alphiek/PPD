import React from "react";
import styled from "styled-components";

export const Slide = ({ image }) => {
  return <SlideWrapper className='slide'>{image}</SlideWrapper>;
};

const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
