import React from 'react';
import {
  Menu,
  Item
} from './styled';

export const Navbar: React.FC = () => {
  return(
    <Menu>
      <Item>Features</Item>
      <Item>How it works</Item>
      <Item>Pricing</Item>
    </Menu>
  );
};

Navbar.displayName = 'Navbar';
