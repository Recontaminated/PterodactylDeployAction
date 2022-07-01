// import node fetch
const fetch = require('node-fetch');
// import FS
const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');
const sftpHost = core.getInput('sftpHost');
const SSHkey = core.getInput('SSHkey');
const panelURL = core.getInput('panelURL');
const localFile = core.getInput('localFile');
const sftpPort = core.getInput('sftpPort');
const sftpUsername = core.getInput('sftpUsername');

let Client = require('ssh2-sftp-client');
let sftp = new Client();

sftp.connect({
  host: sftpHost,
  port: sftpPort,
  username: sftpUsername,
  privateKey: SSHkey
  
}).then(() => {
  return sftp.list('./');
}).then(data => {
  console.log(data, 'the data info');
}).catch(err => {
  console.log(err, 'catch error');
});