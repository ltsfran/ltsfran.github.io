import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Button } from '@dreamtec-ui/button';
import { Input } from '@dreamtec-ui/input';
import { Header } from './components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial, Helvetica, sans-serif;
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
      <main style={{padding: '16px'}}>
        <div>How are you world?</div>
        <Input placeholder="Ingrese su nombre" />
        <Button variant="primary">Get Started</Button>
      </main>
    </Wrapper>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
