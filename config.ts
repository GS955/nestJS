// const redis = require("redis");

const SERV_PORT = '4000';
const WWW_TITLE = 'NEST JS INITIALIZE';
const WWW_DESC = 'NEST JS PRACTICE';
const COOKIE_KEY = 'NEST JS';

const SERVER_IP = '0.0.0.0';
const DB_SERVER_IP = '133.186.144.29';
const PRO_DB_NAME = 'talk_sanofi_dev';
const DEV_DB_NAME = 'talk_sanofi_dev1';

const DB_USER = 'root';
const DB_PASS = 'lee7578';
const AWS_KEYID = '';
const AWS_KEY = '';
const AWS_REGION = '';

const config = {
  SERV_PORT: SERV_PORT,
  WWW_TITLE: WWW_TITLE,
  WWW_DESC: WWW_DESC,
  COOKIE_KEY: COOKIE_KEY,
  SERVER_IP: SERVER_IP,
  PRO_DB_NAME: PRO_DB_NAME,
  DEV_DB_NAME: DEV_DB_NAME,
  DB_PASS: DB_PASS,
  AWS_KEYID: AWS_KEYID,
  AWS_KEY: AWS_KEY,
  AWS_REGION: AWS_REGION,
  GET_DB_INFO: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        host: 'localhost',
        user: DB_USER,
        password: DB_PASS,
        database: PRO_DB_NAME,
        dateStrings: 'date',
      };
    }
    // if (process.env.NODE_ENV === 'development') {
    else {
      return {
        host: DB_SERVER_IP,
        user: DB_USER,
        password: DB_PASS,
        database: DEV_DB_NAME,
        dateStrings: 'date',
      };
    }
  },
};

export { config };
