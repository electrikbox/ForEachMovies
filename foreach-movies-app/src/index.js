import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';

import './css/style.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
