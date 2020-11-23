import React from 'react';
import {
  Menu,
  Item
} from './styled';

export const Navbar: React.FC = () => {
  return(
    <Menu>
      <Item>Compramos tu KIA</Item>
      <Item>Encuentra tu KIA</Item>
      <Item>Regístrate o Ingresa</Item>
    </Menu>
  );
};

Navbar.displayName = 'Navbar';
