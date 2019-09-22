import React from 'react'
import styled from 'styled-components'

import { useSiteMetaData } from '../../../hooks/useSiteMetaData'
import { Link } from 'gatsby'
import { Fb, Insta, Mail } from '../../SocialIcons/SocialIcons'


const NavLink = styled(Link)`
  padding: 0 1.2rem;
  color: #2c2c2c;
  transition: 0.4s;
  :hover {
    color: #BAB8AB;
  }
  @media (max-width: 1024px) {
      padding: 0 0 0.5rem 0;
      border-bottom: 1px solid white;
  }  
`

export const NavLinkStyle = styled.ul`
  position: relative;
  align-content: center;
  @media (max-width: 1024px) {
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: left;
  }
  
`

const ListItem = styled.li`
  overflow-x: hidden;
  border: 1px solid black;
  padding: 0.4rem;
  border-radius: 4px;
  @media (max-width: 1024px) {
    overflow-x: visible;
    text-align: right;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
  } 
  @media (max-width: 820px){
    margin: 4.5vh 0;
    }
`

const Wrapper = styled.div`
    display: flex;
  @media(max-width: 1024px) {
    padding-top: 1rem;
    align-items: end;
  }
`
const Spacer = styled.div`
@media(max-width: 1024px) {
  flex-grow: 1;
}
`
const SocialLinks = styled.a`
  display: flex;
  align-items: center;
`

const ContactLinks = ({ color, click }) => {
  const { social } = useSiteMetaData()

  const handleClick = (e) => {
    e.preventDefault()
    click()
  }

  return (
    <NavLinkStyle>
      <ListItem>
        <NavLink onClick={handleClick}>Contact Us</NavLink>
      </ListItem>
      <Spacer />
      <Wrapper>
        <SocialLinks href={social.fb}
          aria-label='Facebook Link'
          target='blank'
          rel='noopener noreferrer'>
          <Fb color={color} />
        </SocialLinks>
        <SocialLinks href={social.insta}
          aria-label='Instagram Link'
          target='blank'
          rel='noopener noreferrer'>
          <Insta color={color} />
        </SocialLinks>
        <SocialLinks href={`mailto:${social.email}`}
          aria-label='Email Link'
          target='blank'
          rel='noopener noreferrer'>
          <Mail color={color} />
        </SocialLinks>
      </Wrapper>
    </NavLinkStyle>
  )
}

export default ContactLinks