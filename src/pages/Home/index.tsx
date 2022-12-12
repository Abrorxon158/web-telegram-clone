import React, { FC } from 'react';

import { routes } from '@/shared/config/routing';

import './model';

const Home: FC = () => {
  return (
    <div>
      <h1 onClick={() => routes.main.open()}>Home</h1>
    </div>
  );
};

export default Home;
