import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "../Logo";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle";

const Spacer = styled.div`
  flex: 1;
`;

const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  padding: 2rem;
  max-height: 100px;
`;

const Toolbar = ({ toggleHandler }) => {
  return (
    <header>
      <ContactWrapper>
        <Logo />
        <p className="name">Paphos Painter Decorators</p>
        <Spacer />
        <SideDrawerToggle click={toggleHandler} />
      </ContactWrapper>
    </header>
  );
};

Toolbar.propTypes = {
  toggleHandler: PropTypes.func.isRequired
};

export default Toolbar;
