import styled, { css } from 'styled-components';

export const Styled = styled.header`
  width: 100%;

  ${({ theme }) => theme && css`
    background-color: ${theme.backgroundColor};
    color: ${theme.colorText};
  `}
`;

const ROOT = 'Header';
Styled.displayName = `${ROOT}/Styled`;
