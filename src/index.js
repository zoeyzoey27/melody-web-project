import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Routers from './routers/Routers';
import './sass/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routers/>
  </React.StrictMode>
);



reportWebVitals();
