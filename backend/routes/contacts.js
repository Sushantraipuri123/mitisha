var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contactController')

router.post('/getingContactData',contactController.getingContactData);


module.exports = router;
