import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // In a production app, we would log this to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen w-full items-center justify-center bg-background text-text">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold">Something went wrong.</h1>
            <p className="text-muted">Please refresh the experience.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
