
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import "./global.css";
import {Provider} from "react-redux"
import store from "./store"

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

           <Auth0Provider
    domain="dev-fqqy5je715zbm6op.us.auth0.com"
    clientId="JoHROzZvxHgQqCup26dBDGaSxmAEwgIb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Provider store={store}>
           <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>
  </Auth0Provider>
 
);
