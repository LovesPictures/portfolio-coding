import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";

// add in your base_id and api_key
const BASE_ID = 'appVrIqyZZvnKD9As';
const API_KEY = 'keywcrl4OFgUwp3fF'

//endpoint
axios.defaults.baseURL = `https://api.airtable.com/v0/${BASE_ID}/Contact__form/`;
// content sent as a json string
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authorisation
axios.defaults.headers['Authorization'] = `Bearer ${API_KEY}`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
