const express = require('express');
const swagger = require('./swagger');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const products = require('./routes/products');
const apiRouter = express.Router();  // Create a router instance

apiRouter.use('/products', products);  // Define routes with the router

app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

const PORT = 8000;

swagger(app);

app.use('/api', apiRouter);  // Mount the router at /api

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
