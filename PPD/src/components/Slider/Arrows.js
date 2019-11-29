import React from "react";
import styled from "styled-components";

export const RightArrow = ({ goToNextSlide }) => {
  return (
    <div>
      <Arrow onClick={goToNextSlide}>&#8594;</Arrow>
    </div>
  );
};

export const LeftArrow = ({ goToPrevSlide }) => {
  return (
    <div>
      <Arrow onClick={goToPrevSlide}>&#8592;</Arrow>
    </div>
  );
};

const Arrow = styled.span`
  font-size: 2rem;
  font-weight: bolder;
`;
