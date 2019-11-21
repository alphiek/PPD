import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLink = styled(Link)`
  border: 2px solid grey;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #3d3f43;

  &:nth-child(2) {
    border-left: none;
    border-right: none;
  }
  &:nth-child(3) {
    border-right: none;
  }
`;
const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = () => {
  return (
    <>
      <nav>
        <NavWrapper>
          <NavLink
            to="/#about"
            activeStyle={{ backgroundColor: "#FA9917", border: "none" }}
            partiallyActive={true}
          >
            About Us
          </NavLink>
          <NavLink
            to="/#services"
            activeStyle={{ backgroundColor: "#FA9917", border: "none" }}
            partiallyActive={true}
          >
            Services
          </NavLink>
          <NavLink
            to="/#gallery"
            activeStyle={{ backgroundColor: "#FA9917", border: "none" }}
            partiallyActive={true}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/#contact"
            activeStyle={{ backgroundColor: "#FA9917", border: "none" }}
            partiallyActive={true}
          >
            Contact
          </NavLink>
        </NavWrapper>
      </nav>
    </>
  );
};

export default Nav;
