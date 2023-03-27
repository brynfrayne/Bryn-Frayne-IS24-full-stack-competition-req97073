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
  },
  apis: ['./routes/*.js'], // replace this with the path to your route files
};
const specs = swaggerJsdoc(options);

module.exports = function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
};
