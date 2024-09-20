var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController')

router.post('/createAdmin', adminController.createAdmin);

router.post('/loginAdmin',adminController.loginAdmin)

module.exports = router;