'use client';
import React from 'react';
import Uploady, { useUploady } from '@rpldy/uploady';
import UploadDropZone from '@rpldy/upload-drop-zone';

interface FileUploaderProps {
  destination: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ destination }) => {
  //   const { onItemAdd } = useUploady();
  //   const onItemAdd = useUploady();

  const handleUpload = (file: File) => {
    const data = new FormData();
    data.append('file', file);
    data.append('destination', destination);

    return fetch('/api/upload-to-ftp', {
      method: 'POST',
      body: data,
    }).then((response) => response.json());
  };

  return (
    <Uploady
      destination={{
        url: '/api/uploads',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }}
      //   onItemAdd={(item) => {
      //     item.file.then((file) => handleUpload(file));
      //   }}
    >
      <UploadDropZone>
        <div style={{ border: '2px dashed #000', padding: '20px' }}>
          Drag and drop files here
        </div>
      </UploadDropZone>
    </Uploady>
  );
};

export default FileUploader;
