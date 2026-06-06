import React from 'react';
import { ConfigProvider } from 'antd';
import { useTheme } from '../hooks/useTheme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { active } = useTheme();

  const lightTokens = {
    token: {
      colorPrimary: '#0a95ff',
      borderRadius: 12,
      colorBgContainer: '#ffffff',
      colorText: '#0f1724',
    },
  } as const;

  const darkTokens = {
    token: {
      colorPrimary: '#3ea6ff',
      borderRadius: 12,
      colorBgContainer: '#0a0f17',
      colorText: '#e6eef9',
    },
  } as const;

  const themeConfig = active === 'dark' ? darkTokens : lightTokens;

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default ThemeProvider;
