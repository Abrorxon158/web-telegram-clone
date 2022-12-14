import { createEvent, createStore } from 'effector';
import { createGate } from 'effector-react';
import { User } from 'firebase/auth';

export const userChanged = createEvent<User | null>();

export const $user = createStore<User | null>(null);

interface IProps {
  test: string;
}

export const HomeGate = createGate<IProps>();

// HomeGate.state.
