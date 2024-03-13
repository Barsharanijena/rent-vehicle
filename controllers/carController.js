

const { validationResult } = require('express-validator');
const Car = require('../models/car');

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createCar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { type  } = req.body;

    try {
        const newCar = await Car.create({ type  });
        res.status(201).json(newCar);
    } catch (err) {
        console.error('Error creating car:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
