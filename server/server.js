const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
// console.log(__dirname);

//parser to json object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.resolve(__dirname, '../build')));


//connecting to routers
const dbRouter = require('./router/dbRouter');
const petfinderRouter = require('./router/petfinderRouter');
app.use('/db', dbRouter);
app.use('/petfinder', petfinderRouter);






//serve index.html file
app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

//listening on port:
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.export = app;