import React from 'react'
import styled from 'styled-components'

const BurgerIcon = styled.svg`
   fill:  #3D3F43;
   width: auto;
   width: 1.5rem;
`

const Burger = () => (
   <BurgerIcon
     viewBox="0 0 20.2 19.7" 
     alt='Menu Icon' >
       <path d="M18.8,0c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L1.6,3.1c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1
	   L18.8,0z M18.7,8.3c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L8.7,11.3c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1L18.7,8.3z M18.6,16.6
	   c0.6,0,1,0.4,1,1l0,0.8c0,0.6-0.4,1-1,1L1.3,19.7c-0.6,0-1-0.4-1-1l0-0.8c0-0.6,0.4-1,1-1L18.6,16.6z"/>
   </BurgerIcon>
)

export default Burger