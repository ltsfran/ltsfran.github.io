import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, Content } from './components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 12px;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
