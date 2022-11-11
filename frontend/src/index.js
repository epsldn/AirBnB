import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from "./store";
import { csrfFetch, restoreCSRF } from './store/csrf';
import * as sessionReducer from './store/sessionReducer';
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.sessionReducer = sessionReducer;
  window.csrfFetch = csrfFetch;
  window.store = store;
};

function Root() {
  return (<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>);
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
