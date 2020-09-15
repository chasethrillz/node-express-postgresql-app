'use strict';

const host = 'lallah.db.elephantsql.com';
const database = 'pvugtqjl';
const user = 'pvugtqjl';
const password = 'arpNUQP1tz89nOw4cfDCjOR56CZ6db2F';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query);
    }
})

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const db = pgp(options);

module.exports = db;