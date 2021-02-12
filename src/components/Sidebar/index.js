import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
          <CloseIcon>

          </CloseIcon>
      </Icon>
      <SidebarMenu>
          <SidebarLink to="/">Pizza</SidebarLink>
          <SidebarLink to="/">Desserts</SidebarLink>
          <SidebarLink to="/">Full Menu</SidebarLink>
          <SidebarLink to="/">About</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
          <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
