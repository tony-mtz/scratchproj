const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// console.log(__dirname);

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
