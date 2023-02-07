import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import AuthService from './services/AuthService';
import {redirect} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = AuthService.getAuthHeader();
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    const originalRequest = error.config

    if (
      error.response.status === 401 ) {
      redirect("login")
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
