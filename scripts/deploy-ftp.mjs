import * as ftp from "basic-ftp";
import path from "path";

const config = {
  host: process.env.FTP_HOST || "w02068e6.kasserver.com",
  user: process.env.FTP_USER || "f017ff14",
  password: process.env.FTP_PASS,
  secure: false,
};

const REMOTE_DIR = "/signage/out";
const LOCAL_DIR = path.resolve("out");

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log(`Connecting to ${config.host}...`);
    await client.access(config);
    console.log("Connected.");

    console.log(`Clearing remote directory ${REMOTE_DIR}...`);
    await client.ensureDir(REMOTE_DIR);
    await client.clearWorkingDir();

    console.log(`Uploading ${LOCAL_DIR} to ${REMOTE_DIR}...`);
    await client.uploadFromDir(LOCAL_DIR, REMOTE_DIR);

    console.log("Deploy complete.");
  } catch (err) {
    console.error("Deploy failed:", err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
