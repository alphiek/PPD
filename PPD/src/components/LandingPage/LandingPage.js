import React from 'react'
import styled from 'styled-components'
import Nav from '../Nav/Nav'

import BackgroundSection from './BackgroundSection'

const LandingContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LandingPage = () => {
    return (
        <>
        <BackgroundSection>
            <LandingContainer>
                <h1>Experience peace of mind with a quality finish</h1>
            </LandingContainer>
        </BackgroundSection>
        <Nav />
        </>
    )
}

export default LandingPage