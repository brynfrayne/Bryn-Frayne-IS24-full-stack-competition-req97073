const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'A sample API documentation',
    },
    servers: [
      {
        url: '/api',
        description: 'Base API path',
      },
    ],
    basePath: '/api', // specify the base path for Swagger documentation
  },
  apis: ['./routes/*.js', './swagger_products.js'], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

module.exports = function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
};
