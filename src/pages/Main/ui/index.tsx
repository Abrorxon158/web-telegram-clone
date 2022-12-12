import React, { FC } from 'react';
import { routes } from '@/shared/config/routing';
import './model';

export const Main: FC = () => {
  return (
    <div>
      <h1 onClick={() => routes.home.open()}>Main</h1>
    </div>
  );
};
