import styled from 'styled-components';
import { Menu } from '../Navbar';

export const MenuCheckbox = styled.input.attrs(() => ({
  id: 'checkMenu',
  type: 'checkbox'
}))`
  display: none;
`;

export const MenuIcon = styled.label.attrs(() => ({
  htmlFor: 'checkMenu'
}))`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 4px solid #000000;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  background-color: #FFFFFF;
  padding: 14px 16px;
  position: relative;

  ${MenuCheckbox}:checked~${Menu} {
    max-height: 147px;
    transition: .3s all ease;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoPartner = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding-right: 19px;
  box-sizing: border-box;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const PartnerImg = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 52px;
  height: auto;
  align-self: center;
`;

export const PartnerTag = styled.div`
  display: inline-block;
  font-family: 1rem;
  color: #58595B;
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 16px;
`;
