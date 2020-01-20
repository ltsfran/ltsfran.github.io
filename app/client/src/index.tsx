import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'dreamtec-ui';

export const App = () => (
  <>
    <div>How are you world?</div>
    <Button>Get Started</Button>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);