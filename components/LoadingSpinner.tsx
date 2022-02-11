import { ReactElement } from 'react';

function LoadingSpinner(): ReactElement {
  return (
    <div className="flex h-screen items-center justify-center">
      <svg className="animation-duration-1500 h-28 w-28 animate-spin rounded-full border-8 border-t-8 border-gray-400 border-t-green-400" />
    </div>
  );
}

export default LoadingSpinner;
