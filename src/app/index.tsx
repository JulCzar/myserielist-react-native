import React from 'react';
import StatusBarProvider from './contexts/StatusBarProvider';

import ErrorBoundary from './ErrorBoundary';
import Routes from './routes';

const App = () => (
  <ErrorBoundary>
    <StatusBarProvider>
      <Routes />
    </StatusBarProvider>
  </ErrorBoundary>
);

export default App;
