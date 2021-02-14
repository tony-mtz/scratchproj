const express = require('express');
const router = express.Router();
const itemController = require('../controller/petControllers.js');

router.post('/', 
  itemController.createItem, 
  (req, res) => {
    res.status(200).json({});
  }
);

router.get('/', 
  itemController.readItem, 
  (req, res) => {
    res.status(200).json(res.locals.query);
  }
);

// router.put('/', 
//   itemController.updateItem, 
//     req, res)=>{
        
//   }
// )

// router.delete('/', 
//     itemController.deleteItem, 
//     (req, res)=>{
        
//     }
// )

module.exports = router;