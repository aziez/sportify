// app/api/upload/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'basic-ftp';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

// Convert ReadableStream to Node.js Readable
function streamToNodeReadable(
  readableStream: ReadableStream<Uint8Array>
): Readable {
  const nodeStream = new Readable({
    read() {},
  });

  const reader = readableStream.getReader();
  function push() {
    reader.read().then(({ done, value }) => {
      if (done) {
        nodeStream.push(null);
        return;
      }
      nodeStream.push(Buffer.from(value));
      push();
    });
  }

  push();
  return nodeStream;
}

export async function POST(req: NextRequest) {
  // const filename = 'uploaded-file'; // Customize or derive filename as needed

  // Convert ReadableStream to Node.js Readable
  const nodeStream = streamToNodeReadable(
    req.body as ReadableStream<Uint8Array>
  );

  const tmpFilePath = path.join(process.cwd(), 'uploads');

  return new Promise<NextResponse>((resolve, reject) => {
    const writeStream = fs.createWriteStream(tmpFilePath);

    nodeStream.pipe(writeStream);

    writeStream.on('finish', async () => {
      // Create FTP client and upload file
      const ftpClient = new Client();
      try {
        await ftpClient.access({
          host: process.env.NEXT_PUBLIC_SFTP_HOST!,
          port: parseInt(process.env.NEXT_PUBLIC_SFTP_PORT || '22'),
          user: process.env.SFTP_USERNAME!,
          password: process.env.SFTP_PASSWORD!,
          secure: true,
        });

        await ftpClient.uploadFrom(tmpFilePath, `/sportify/logo/`);
        fs.unlinkSync(tmpFilePath); // Clean up temporary file

        return resolve(
          NextResponse.json({ message: 'File uploaded successfully' })
        );
      } catch (error) {
        return resolve(NextResponse.json({ error: error }, { status: 500 }));
      } finally {
        ftpClient.close();
      }
    });

    writeStream.on('error', (err) => {
      reject(err);
    });
  });
}
