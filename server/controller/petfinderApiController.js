//controllers for the petfinder API queries

const secret = require('../secrets.js');
const petfinder = require("@petfinder/petfinder-js");
const petSearch = new petfinder.Client({apiKey: secret.petApiKey, secret: secret.petApiSecret});


const petController = {}

petSearch.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        //console.log(response)
    })
    .catch(function (error) {
        // Handle the error
        //console.log(error)
    });


module.exports = petSearch;

// client.animal.search({
//     type: "Dog",
//     breed: "Bernedoodle",
//     page: 1,
//     limit: 100,
//   }).then(resp => {
//     // Do something with resp.data.animals
//   });