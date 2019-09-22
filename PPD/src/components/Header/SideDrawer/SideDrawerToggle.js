import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import BurgerIcon from './BurgerIcon'


const SideDrawerButton = styled.button`
   display: flex;
   @media(min-width: 1025px) {
    display: none;
 }
`

const SideDrawerToggle = ({ click }) => {
  return (
    <SideDrawerButton onClick={click}>
      <BurgerIcon />
    </SideDrawerButton>
  )
}

SideDrawerToggle.propTypes = {
  click: PropTypes.func.isRequired
}

export default SideDrawerToggle