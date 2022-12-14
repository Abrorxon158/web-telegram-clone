import { sample } from 'effector';
import { onAuthStateChanged } from 'firebase/auth';
import { debug } from 'patronum';

import { $user, HomeGate, userChanged } from '@/pages/Home/model/index';

import auth from '@/shared/config/firebase';

onAuthStateChanged(auth, userChanged);

sample({
  clock: userChanged,
  filter: Boolean,
  target: $user,
});

// debug($user);
