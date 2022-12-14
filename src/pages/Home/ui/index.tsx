import { useGate } from 'effector-react';
import React, { FC } from 'react';

import * as styles from './styles';
import { HomeGate } from '../model';
import '../model/init';

const props = {
  test: 'qw',
};

export const Home: FC = () => {
  useGate(HomeGate, props);

  return (
    <div className={styles.chatNotification}>
      <div className={styles.chatNotificationLogoWrapper}>
        <img
          className={styles.chatNotificationLogo}
          src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
          alt="ChitChat Logo"
        />
      </div>
      <div>
        <div className={styles.chatNotificationTitle}>ChitChat</div>
        <p className={styles.chatNotificationMessage}>You have a new message!</p>
      </div>
    </div>
  );
};
