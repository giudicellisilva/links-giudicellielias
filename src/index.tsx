import Home from 'components/Home';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "index.css";
import "style/normalize.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
