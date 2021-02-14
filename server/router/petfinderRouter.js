const express = require('express');
const router = express.Router();
const petSearch = require('../controller/petfinderApiController.js')

//route get request to petfinder API
router.post('/:location', (req,res)=>{
  console.log(req.body)
  console.log(req.params)
  res.json('hello')
})

// after location make middleware
//res,locals.dest = req.params
module.exports = router;