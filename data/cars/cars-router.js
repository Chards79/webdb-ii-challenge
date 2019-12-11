const express = require('express');
const knex = require('../dbConfig');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true
});

const router = express.Router();




module.exports = router;