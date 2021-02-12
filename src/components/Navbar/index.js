import React from 'react';
import { MenuBar, Nav, NavIcon, NavLink } from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
          <NavLink to='/'>Pizza</NavLink>
          <NavIcon onClick={toggle}>
             <p>Menu</p>
             <MenuBar/>
          </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
