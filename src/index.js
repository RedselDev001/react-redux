import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { configureStore } from "@reduxjs/toolkit"; // ✅ Use configureStore
import { Provider } from "react-redux";
import rootReducer from './service/Reducers/index';

const store = configureStore({ reducer: rootReducer }); // ✅ Updated store creation

console.log("store-data@@@@", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
