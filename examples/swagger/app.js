require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const swagger = require('./config/swagger');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;

configExpress(app);
routes(app);
swagger(app, PORT);

module.exports = app;
