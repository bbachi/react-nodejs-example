import React from 'react';

const ErrorComponent = () => {
  return <h1>Something went wrong</h1>;
};

export class AppError extends React.Component {
  
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}