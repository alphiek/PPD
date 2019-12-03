import React from "react";
import { text } from "../text";
import styled from "styled-components";

export const Text = ({ showing }) => {
  let title;
  let body;

  if (showing === "1") {
    title = Object.keys(text[0]);
    body = Object.values(text[0]);
  } else if (showing === "2") {
    title = Object.keys(text[1]);
    body = Object.values(text[1]);
  } else if (showing === "3") {
    title = Object.keys(text[2]);
    body = Object.values(text[2]);
  } else if (showing === "0") {
    title = "";
    body = "";
  }

  return (
    <>
      <TextContainer>
        <h4>{title}</h4>
        <p>{body}</p>
      </TextContainer>
    </>
  );
};

const TextContainer = styled.div`
  position: relative;
  flex: 1;
  margin: 1rem 4rem;
`;
