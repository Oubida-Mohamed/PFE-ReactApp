import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StepContext from "./components/page_devenir_vendeur/StepContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StepContext>
      <App />
    </StepContext>
  </React.StrictMode>
);
