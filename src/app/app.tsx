import React, { FC, Suspense } from 'react';
import './styles/main.scss';
import { RouterProvider } from 'atomic-router-react';
import { router, RoutesView } from '@/app/config/routing/init';

export const App: FC = () => {
  return (
    <Suspense fallback={'loading...'}>
      <RouterProvider router={router}>
        <RoutesView />
      </RouterProvider>
    </Suspense>
  );
};
