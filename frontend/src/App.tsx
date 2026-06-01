import { App as AntApp, ConfigProvider, theme } from 'antd';
import type { PropsWithChildren } from 'react';

export function App({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: { borderRadius: 10 },
      }}
    >
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  );
}

