// const redis = require("redis");

const SERV_PORT = '3001';
const WWW_TITLE = 'MARKTALK : Sanofi';
const WWW_DESC = 'MARKTALK Messaging System';

const SERVER_IP = '133.186.144.29';
const DB_NAME = 'talk_sanofi_dev1';

const DB_USER = 'root';
const DB_PASS = 'lee7578';
const AWS_KEYID = '';
const AWS_KEY = '';
const AWS_REGION = '';

const config = {
    SERV_PORT: SERV_PORT,
    WWW_TITLE: WWW_TITLE,
    WWW_DESC: WWW_DESC,
    SERVER_IP: SERVER_IP,
    DB_NAME: DB_NAME,
    DB_PASS: DB_PASS,
    AWS_KEYID: AWS_KEYID,
    AWS_KEY: AWS_KEY,
    AWS_REGION: AWS_REGION,
    GET_DB_INFO : () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                host: 'localhost',
                user: DB_USER,
                password: DB_PASS,
                database: DB_NAME,
                dateStrings: 'date'
            };
        }
        if (process.env.NODE_ENV === 'development') {
            return {
                host: SERVER_IP,
                user: DB_USER,
                password: DB_PASS,
                database: DB_NAME,
                dateStrings: 'date'
            };
        }
    }
}

export {config}