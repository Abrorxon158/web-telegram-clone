import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { FallbackProps, ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';

const reactRoot = createRoot(document.getElementById('root')!);

const ErrorFallback = ({ error }: FallbackProps) => {
  console.log(error, 'error boundary');
  return (
    <div className="errorText">
      <h4>Bizda vaqtinchalik nosozlik mavjud. Ushbu nozozlikdan xabardormiz va bartaraf etmoqdamiz.</h4>
    </div>
  );
};

reactRoot.render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
      <ToastContainer limit={2} />
    </ErrorBoundary>
  </React.StrictMode>
);
