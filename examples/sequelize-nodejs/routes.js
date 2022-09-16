/**
 * Main application routes
 */

// Import Endpoints
const project = require('./api/project');

module.exports = (app) => {
  app.use('/api/projects', project);
};
