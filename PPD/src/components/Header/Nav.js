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
    font-family: 'Impact';
    opacity: 0.8;
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
