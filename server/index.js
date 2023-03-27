const express = require('express');
const swagger = require('./swagger');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

const PORT = 8000;

swagger(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
