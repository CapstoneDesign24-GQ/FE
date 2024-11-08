import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GlobalStyle />
//     <App />
//   </React.StrictMode>
// );

const rootElement=document.getElementById('root');

createRoot(rootElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
