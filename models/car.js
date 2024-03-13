const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
 
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
