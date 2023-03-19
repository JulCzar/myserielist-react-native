import React, { PropsWithChildren } from 'react';
import type { ErrorBoundaryState } from './types';
import FatalPage from './FatalPage';

const errorState: ErrorBoundaryState = { hasError: true };
const normalState: ErrorBoundaryState = { hasError: false };

class ErrorBoundary extends React.Component<
  PropsWithChildren<unknown>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = normalState;
  }

  static getDerivedStateFromError(_error: unknown) {
    return errorState;
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <FatalPage
          onButtonPress={() => {
            console.log('reiniciando app');
            (() => this.setState(normalState))();
          }}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
