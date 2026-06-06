import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { App } from './App';
import { store } from './store/store';
import { router } from './router';
import { ConfigProvider } from 'antd';
import ThemeProvider from './providers/ThemeProvider';

import 'antd/dist/reset.css';
import './styles/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App>
          <RouterProvider router={router} />
        </App>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

