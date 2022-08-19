
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { version } = require('../package.json')

const routesApi = path.join(__dirname, '../api/**/index.js');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version,
      description: 'API Documentation to example',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      },
      contact: {
        name: 'John Doe',
        url: 'https://example.com/contact',
        email: 'johndoe@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:8080/',
        description: 'Local server'
      },
      {
        url: 'http://heroku.com/',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        userResponse: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Id of the user",
              example: 1,
            },
            name: {
              type: "string",
              description: "Name of the user",
              example: "khriztian moreno",
            },
            email: {
              type: "string",
              description: "Email of the user",
              example: "khriztianmoreno@gmail.com",
            },
          }
        },
        userNotFound: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Message of the error",
              example: "User not found",
            }
          }
        },
        badRequest: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Message of the error",
              example: "Bad request",
            },
            errors: {
              type: "array",
              description: "Errors of the request",
              example: [
                {
                  field: "name",
                  message: "Name is required",
                },
                {
                  field: "email",
                  message: "Email is required",
                },
              ],
            },
          }
        },
        serverError: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Message of the error",
              example: "Internal server error",
            },
          }
        }
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          in: 'header',
        },
      },
    },
  },
  apis: [routesApi], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Swagger docs running on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
