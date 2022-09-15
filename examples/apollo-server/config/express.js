const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

function configExpress(app) {
  app.use(cors());
  app.use(express.json());
}

module.exports = configExpress;
