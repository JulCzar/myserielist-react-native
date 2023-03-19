import React, { PropsWithChildren } from 'react';
import { StatusBar, StatusBarProps } from 'react-native';
import { context } from './context';

const StatusBarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [statusBar, setStatusBar] = React.useState<StatusBarProps>({});

  return (
    <context.Provider value={{ setStatusBar }}>
      <StatusBar {...statusBar} />
      {children}
    </context.Provider>
  );
};

export default StatusBarProvider;
