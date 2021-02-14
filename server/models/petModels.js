const mongoose = require('mongoose');
//Import MongoDB URI
const secret = require('../secrets.js')
const MONGO_URI = secret.mongoURI;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pets'
})

    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

//Create schema for pet database
const petSchema = new Schema({
  type: String,
  breed: String,
  size: String,
  age: String,
  location: String
});

//Create model for pet database
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet