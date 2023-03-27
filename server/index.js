const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
