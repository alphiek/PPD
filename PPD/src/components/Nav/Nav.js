import React from 'react'
import styled from 'styled-components'


const NavContainer = styled.nav`
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.3);
  width: 100%;
`

const NavWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Nav = () => {
    return (
        <>
        <NavContainer>
          <NavWrapper>
            <a href='#www'>About Us</a>
            <a href='#www'>Services</a>
            <a href='#www'>Gallery</a>
            </NavWrapper>
        </NavContainer>
        </>
    )
}

export default Nav