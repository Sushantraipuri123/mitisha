var express = require('express');
var router = express.Router();

var employeController = require('../controllers/employeController')

/* GET users listing. */

router.post('/createEmploye',employeController.createEmploye);

router.post('/findEmploye',employeController.findEmploye);

router.post('/getEmploye',employeController.getEmploye);

router.delete('/delete/:id',employeController.deleteemploye);


router.post('/updateEmploye/:id',employeController.updateEmploye);





module.exports = router;
