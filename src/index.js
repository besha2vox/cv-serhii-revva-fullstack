import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from 'contexts/ThemeContext';
import { theme } from 'theme/theme';

import './index.css';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/cv-serhii-revva-fullstack">
    <React.StrictMode>
      <Theme>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Theme>
    </React.StrictMode>
  </BrowserRouter>
);
