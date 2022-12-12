import { chainRoute, redirect, RouteInstance, RouteParams, RouteParamsAndQuery } from 'atomic-router';
import { createEvent, createStore, sample } from 'effector';
import { routes } from '@/shared/config/routing';

const $isAuthorized = createStore(false);
const tokenReceived = createEvent();

export function protectedRoute<Params extends RouteParams>(route: RouteInstance<Params>) {
  const sessionCheckStarted = createEvent<RouteParamsAndQuery<Params>>();

  sessionCheckStarted.watch(console.log);

  const alreadyAuthorized = sample({
    clock: sessionCheckStarted,
    filter: $isAuthorized
  });

  sample({
    clock: sessionCheckStarted,
    filter: $isAuthorized.map((isAuthorized) => !isAuthorized),
    // fn: () => {},
    target: routes.home.open
  });

  return chainRoute({
    route,
    beforeOpen: sessionCheckStarted,
    openOn: [alreadyAuthorized, tokenReceived]
  });
}
