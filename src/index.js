import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StepContext from "./components/page_devenir_vendeur/StepContext"
import {BrowserRouter} from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer)
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <StepContext>
      <App />
    </StepContext>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
