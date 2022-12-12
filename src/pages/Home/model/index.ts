import { createEffect, createStore, sample } from 'effector';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '@/shared/config/firebase';
import { routes } from '@/shared/config/routing';
import { chainRoute } from 'atomic-router';

export const $auth = createStore(null);

const fetchAuthFx = createEffect(() => {
  console.log('auth');
  onAuthStateChanged(auth, (user) => {
    return user;
  });
});

$auth.on(fetchAuthFx.doneData, (_, user) => user);
routes.home.opened.watch(() => console.log('home'));
sample({
  clock: routes.home.$isOpened,
  target: fetchAuthFx
});

export const homeLoadedRoute = chainRoute({
  route: routes.home,
  beforeOpen: {
    effect: fetchAuthFx,
    mapParams: () => {}
  }
});
