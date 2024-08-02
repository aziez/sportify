'use client';

import { FileUploaderMinimal } from '@uploadcare/react-uploader';
import { useState } from 'react';

const UploadsLogo = ({ handleChangeEvenet }) => {
  return (
    <FileUploaderMinimal
      pubkey="4f6595645be1051b26c3"
      maxLocalFileSizeBytes={2000000}
      multiple={false}
      imgOnly={true}
      onChange={handleChangeEvenet}
      classNameUploader="my-config"
    />
  );
};

export default UploadsLogo;
