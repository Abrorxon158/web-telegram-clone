import React, { FC, useCallback, useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

import Jellyfish from '@/shared/image/jellyfish.jpeg';

import styles from './index.module.scss';

const ImageCrop: FC = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [scale, setScale] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [objFit, setObjFit] = useState(false);
  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    // console.log(croppedArea, croppedAreaPixels);
  }, []);

  const ImgRotation = [0, 90, 180, 270];

  function foo(num: number) {
    if (num >= ImgRotation.length - 1) {
      setRotate(0);
    } else {
      setRotate((num) => num + 1);
    }
  }

  return (
    <>
      <button onClick={() => setScale(true)}>Count: {rotate}</button>
      {scale && (
        <div className={styles.cropContainer}>
          <Cropper
            image={Jellyfish}
            crop={crop}
            zoom={zoom}
            rotation={ImgRotation[rotate]}
            aspect={1}
            onCropChange={setCrop}
            objectFit={objFit ? 'vertical-cover' : 'contain'}
            cropShape="round"
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            // style={{ mediaStyle: { transform: 'scaleX(-1)' } }}
            transform={'scaleX(-1)'}
          />
          <div className={styles.controlButtons}>
            <button onClick={() => setObjFit(!objFit)}>back</button>
            <button onClick={() => foo(rotate)}>next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCrop;
