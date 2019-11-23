import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../Utils/colors";

const NavLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff512f;
  background: -webkit-linear-gradient(to bottom, #f09819, #FA9917);
  background: linear-gradient(to bottom, #f09819, #FA9917);
  transition: 0.3s all ease-in-out;
  color: ${colors.textnav};
  :hover{
    color: white;
    font-size: 0.95rem;
    text-shadow: -1px 0px 5px #D35B38;
    font-family: 'Impact';
    letter-spacing: 6px;
    font-weight: normal;
  }
`;

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to="/#services">Services</NavLink>
        <NavLink to="/#gallery">Gallery</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </nav>
    </>
  );
};

export default Nav;
