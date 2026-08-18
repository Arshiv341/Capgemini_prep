import React, { Component, ErrorInfo, ReactNode } from 'react';
import { PageContainer, PrimaryButton, SecondaryButton } from './UI';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside assessment:", error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/dashboard';
  };

  public render() {
    if (this.state.hasError) {
      const isDev = import.meta.env.DEV;

      return (
        <PageContainer>
          <div className="flex flex-col items-center justify-center py-16 px-6 border border-rose-500/20 bg-rose-500/5 rounded-xl space-y-6 text-center max-w-2xl mx-auto font-sans">
            <AlertTriangle className="text-rose-500" size={48} />
            <h2 className="text-lg font-black text-foreground">Something went wrong while loading this assessment.</h2>
            <p className="text-xs text-muted-text max-w-md">
              An unexpected error occurred during the assessment render cycle. Your progress may still be saved in local storage.
            </p>

            {isDev && this.state.error && (
              <div className="w-full text-left bg-muted-bg border border-border-primary rounded-lg p-4 font-mono text-[10px] text-rose-500 overflow-x-auto space-y-2 max-h-[30vh]">
                <p className="font-bold">Error: {this.state.error.message}</p>
                {this.state.error.stack && (
                  <pre className="whitespace-pre overflow-x-auto">{this.state.error.stack}</pre>
                )}
                {this.state.errorInfo && (
                  <pre className="whitespace-pre overflow-x-auto">{this.state.errorInfo.componentStack}</pre>
                )}
              </div>
            )}

            <div className="flex gap-4">
              <SecondaryButton onClick={this.handleReset} className="py-2 px-4 text-xs font-bold uppercase">
                Return to Dashboard
              </SecondaryButton>
              <PrimaryButton onClick={() => window.location.reload()} className="py-2 px-4 text-xs font-bold uppercase flex items-center gap-1">
                <RefreshCw size={12} />
                Reload Page
              </PrimaryButton>
            </div>
          </div>
        </PageContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
