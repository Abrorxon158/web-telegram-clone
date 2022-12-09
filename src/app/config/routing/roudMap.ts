import { routes } from '@/shared/config/routing';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/home'));
const Main = lazy(() => import('@/pages/Main'));

export const routesMap = [
  { path: '/', route: routes.home, view: Home },
  { path: '/main', route: routes.main, view: Main }
];
