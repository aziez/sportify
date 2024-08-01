'use client';

import { FileUploaderMinimal } from '@uploadcare/react-uploader';
import { Widget } from '@uploadcare/react-widget';
import { useState } from 'react';

const UploadsLogo = ({ handleChangeEvenet }) => {
  return (
    <Widget
      publicKey="4f6595645be1051b26c3"
      multiple={false}
      onChange={handleChangeEvenet}
    />
  );
};

export default UploadsLogo;
