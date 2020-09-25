import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import Routes from './routes/Routes';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthRoutes from './routes/AuthRoutes';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log("domain", domain, clientId)
ReactDOM.render(
  <Provider store={store}>
    <Routes />
 <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
 </Auth0Provider>
  </Provider>,
  
  document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
