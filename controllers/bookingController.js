const { validationResult } = require('express-validator');
const Booking = require('../models/booking');

exports.bookCar = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { carId, userId, startDate, endDate } = req.body;

    const existingBooking = await Booking.findOne({
        carId,
        $or: [
            { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
            { startDate: { $gte: startDate, $lte: endDate } },
        ],
    });

    if (existingBooking) {
        return res.status(400).json({ message: 'Car is already booked for selected dates' });
    }

    try {
        const newBooking = await Booking.create({ carId, userId, startDate, endDate });
        res.status(201).json(newBooking);
    } catch (err) {
        console.error('Error booking car:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
