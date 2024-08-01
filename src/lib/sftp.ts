import { Client } from 'basic-ftp';

const SFTPconfig = {
  host: process.env.NEXT_PUBLIC_SFTP_HOST,
  user: process.env.SFTP_USERNAME,
  password: process.env.SFTP_PASSWORD,
};

const SFTPclient = new Client();
SFTPclient.ftp.verbose = true;

async function uploadFileToFtp(
  fileStream: any,
  fileName: string,
  destination: string
) {
  await SFTPclient.access(SFTPconfig);
  await SFTPclient.uploadFrom(fileStream, `${destination}/${fileName}`);
  await SFTPclient.close();
}

export { SFTPclient, SFTPconfig, uploadFileToFtp };
