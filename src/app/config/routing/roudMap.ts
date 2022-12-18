import { lazy } from 'react';

import { homeLoadedRoute } from '@/pages/Home/model';
import { mainLoadedRoute } from '@/pages/Main/model';

import { routes } from '@/shared/config/routing';
import {loginLoadedRoute} from "@/pages/Login/model";

const Home = lazy(() => import('@/pages/Home'));
const Main = lazy(() => import('@/pages/Main'));
const Login = lazy(() => import('@/pages/Login'));

export const routesMap = [
  { path: '/', route: routes.home },
  { path: '/main/:id', route: routes.main },
  { path: '/login', route: routes.login },
];

export const routesComponents = [
  { route: homeLoadedRoute, view: Home },
  { route: mainLoadedRoute, view: Main },
  { route: loginLoadedRoute, view: Login },
];
