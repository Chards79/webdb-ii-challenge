const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

const db = require('../data/dbConfig');

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);
server.use('/api/cars', db);

module.exports = server;
