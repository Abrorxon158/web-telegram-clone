import { createHistoryRouter, redirect } from 'atomic-router';
import { routesMap } from '@/app/config/routing/roudMap';
import { routes } from '@/shared/config/routing';
import { createRoutesView } from 'atomic-router-react';
import { createBrowserHistory } from 'history';

export const router = createHistoryRouter({ routes: routesMap });

redirect({
  clock: router.routeNotFound,
  route: routes.home
});

router.setHistory(createBrowserHistory());

export const RoutesView = createRoutesView({
  routes: routesMap
  // otherwise() {
  //   return <div>Page not found!</div>;
  // }
});
