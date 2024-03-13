const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bookingController = require('../controllers/bookingController');


router.post('/', [
    body('carId').notEmpty().withMessage('Car ID is required'),
    body('userId').notEmpty().withMessage('User ID is required'),
    body('startDate').notEmpty().withMessage('Start date is required'),
    body('endDate').notEmpty().withMessage('End date is required'),
], bookingController.bookCar);

module.exports = router;
