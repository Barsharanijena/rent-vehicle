const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const Car = require('../models/car');
const carController = require('../controllers/carController');

router.get('/', carController.getAllCars);


router.post('/', [
], carController.createCar);

module.exports = router;
