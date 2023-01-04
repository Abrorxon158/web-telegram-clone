import React, { FC } from 'react';

import { routes } from '@/shared/config/routing';
import ImageCrop from '@/shared/ui/Image-Crop/ui';

import '../model';

export const Main: FC = () => {
  return (
    <div>
      {/*<h1 onClick={() => routes.home.open()}>Main</h1>*/}
      <ImageCrop />
    </div>
  );
};
