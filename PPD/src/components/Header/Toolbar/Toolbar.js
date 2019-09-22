import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import ContactLinks from '../ContactLinks/ContactLinks'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'

const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1024px) {
  display: none;
}
`

const ContactWrapper = styled.div`
position: relative;
display: flex;
font-size: 0.9rem;
align-items: center;
height: 100%;
padding: 2rem;
max-height: 100px;
`

const Toolbar = ({ toggleHandler }) => {
  return (
    <header>
      <ContactWrapper>
        <Logo />
        <p className='name'>Paphos Painter Decorators</p>
        <Spacer />
        <ToolbarNavItems>
          <ContactLinks color='#2c2c2c' click={toggleHandler} />
        </ToolbarNavItems>
        <SideDrawerToggle click={toggleHandler} />
      </ContactWrapper>
    </header>
  )
}



Toolbar.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
}

export default Toolbar
