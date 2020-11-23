import styled from 'styled-components';

export const Menu = styled.ul`
  max-height: 0;
  overflow: hidden;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #FFFFFF;
  transition: .3s all ease;

  @media(min-width: 768px) {
    position: relative;
    overflow: auto;
    width: auto;
    max-height: initial;
    display: flex;
  }
`;

export const Item = styled.li`
  padding: 15px 16px;
  font-size: 1.2rem;
  border-bottom: 1px solid #CCCCCC;
  cursor: pointer;

  @media(min-width: 768px) {
    border: none;
    padding: 5px 14px;
  }
`;
