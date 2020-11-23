import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@dreamtec-ui/button';
import { Input } from '@dreamtec-ui/input';

export const App = () => (
  <>
    <div>How are you world?</div>
    <Input placeholder="Ingrese su nombre" />
    <Button variant="secondary" isLoading>Get Started</Button>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
