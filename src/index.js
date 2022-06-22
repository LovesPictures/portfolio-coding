import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";

// add in your base_id and api_key
const BASE_ID = '';
const API_KEY = ''

// change /contacts/ to your table name
axios.defaults.baseURL = `https://api.airtable.com/v0/${BASE_ID}/contacts/`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers['Authorization'] = `Bearer ${API_KEY}`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

