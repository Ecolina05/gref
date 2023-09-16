import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const ROOT: HTMLElement = document.getElementById('root')!;

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
