import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@dreamtec-ui/input';

const getUserProfile = () => {
  const FB = (window as any).FB;

  FB.api('/me', { fields: "name, email" }, response => {
    console.log(response, 'response me');
  });

  FB.api('/')
};

const statusChangeCallback = (response) => {
  if (response.status === 'connected') {
    getUserProfile();
  } else {
    console.log('Not login');
  }
};

const loginFacebook = () => {
  const FB = (window as any).FB;

  (window as any).fbAsyncInit = function() {
    FB.init({
      appId            : '270674881162864',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v10.0'
    });
  };

  FB.getLoginStatus((response) => {
    statusChangeCallback(response);
  });
};

export const App = () => {

  useEffect(() => {
    loginFacebook();
  }, []);

  const handleClickLogin = () => {
    const FB = (window as any).FB;

    FB.login(response => {
      console.log(response, 'response login');
    }, {
      scope: 'public_profile, email',
      return_scopes: true
    });
  };

  return (
    <>
      <h1>How are you world?</h1>
      <img src="https://picsum.photos/200" alt="image test for SEO"/>
      <Input placeholder="Ingrese su nombre" />
      <button id="login" onClick={handleClickLogin}>Login</button>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
