import React, {StrictMode} from 'react';
import  { createRoot } from 'react-dom/client';
import './index.css';
import Routes from './Main/Routes';
import { BrowserRouter } from 'react-router-dom';
import NameProvider from './context/nameContext';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <NameProvider>
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
    </NameProvider>
  </StrictMode>
);
