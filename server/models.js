const mongoose = require('mongoose');
//Import MongoDB URI
const MONGO_URI = 'mongodb+srv://tedtaemin:TedMinCoding123@cluster0.46wcz.mongodb.net/<pets>?retryWrites=true&w=majority'

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

})

//Create model for pet database
const Pet = mongoose.model('pet', petSchema);



module.exports = Pet;