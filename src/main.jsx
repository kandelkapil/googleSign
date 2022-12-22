import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import { englishTranslation,nepaliTranslation } from './translation/translation';
// import './index.css';
i18n
.use(initReactI18next)
.init({
  resources: {
    en: englishTranslation,
    np:nepaliTranslation
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
      }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
