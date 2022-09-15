const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
dotenv.config();

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const graphqlConfig = require('./config/graphql');

const app = express();
const server = http.Server(app);

connectDB();
configExpress(app);
graphqlConfig(app);

module.exports = { app, server };
