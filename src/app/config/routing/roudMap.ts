import { lazy } from 'react';

import { mainLoadedRoute } from '@/pages/Main/model';

import { routes } from '@/shared/config/routing';

const Home = lazy(() => import('@/pages/Home'));
const Main = lazy(() => import('@/pages/Main'));

export const routesMap = [
  { path: '/', route: routes.home },
  { path: '/main/:id', route: routes.main },
  // { path: '/main/:id', route: routes.main },
];

export const routesComponents = [
  { route: routes.home, view: Home },
  { route: mainLoadedRoute, view: Main },
  // { route: mainLoadedRoute, view: Main },
];
