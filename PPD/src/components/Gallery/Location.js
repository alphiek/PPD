import React from "react";
import { useState } from 'react'
import styled from 'styled-components'

const locationItems = ["Polemi", "Somewhere", "Somewhere else"];

export const Location = () => {
  const [currentItem, setCurrentItem] = useState(0)

  console.log(currentItem)

  return (
    <>
      <h3>Location:</h3>
      <FlexContainer>
        {locationItems.map((e, i) => (
          <Item onClick={() => setCurrentItem(i)} key={i}>{e}</Item>
        ))}
      </FlexContainer>
    </>
  );
};


const FlexContainer = styled.div`
  display: flex;
  width: 10vw;
`;

const Item = styled.div`
  width: 100px;
`
