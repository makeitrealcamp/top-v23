const healthcheck = require('./api/healthcheck');
const user = require('./api/user');

function routes(app) {
  // API Routes
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
}

module.exports = routes;
