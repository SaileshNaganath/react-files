import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ThemeChanger from './ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeChanger>
      <App/>
    </ThemeChanger>
  </React.StrictMode>,
  document.getElementById('root')
);

