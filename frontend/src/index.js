import React from 'react';
import ReactDOM from 'react-dom';
import "./sitewideCSS/reset.css";
import './sitewideCSS/index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from "./store";
import { csrfFetch, restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import * as spotActions from './store/spots';
import * as spotImageActions from "./store/spotImages";
import { ModalProvider } from './context/Modal';

import { IsEditedProvider } from './context/isEditedContext';
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.sessionActions = sessionActions;
  window.spotActions = spotActions;
  window.spotImageAction = spotImageActions;
  window.csrfFetch = csrfFetch;
  window.store = store;
};

function Root() {
  return (

    <Provider store={store}>
      <ModalProvider>
        <IsEditedProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IsEditedProvider>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
