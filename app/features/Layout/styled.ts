import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);

  ${({ theme }) => theme && css`
    background-color: ${theme.backgroundColor};
    color: ${theme.colorText};
  `}
`;

export const Main = styled.main`
  flex: 1;
`;
