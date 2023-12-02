import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CoffeeContextProvider from './context/useCoffeeContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoffeeContextProvider>
        <App />
        <ToastContainer/>
      </CoffeeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
