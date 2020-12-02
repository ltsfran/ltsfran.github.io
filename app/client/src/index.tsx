import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@dreamtec-ui/button';
import { Input } from '@dreamtec-ui/input';

export const App = () => (
  <>
    <h1>How are you world?</h1>
    <img src="https://picsum.photos/200" alt="image test for SEO"/>
    <Input placeholder="Ingrese su nombre" />
    <Button variant="secondary" isLoading>Get Started</Button>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
