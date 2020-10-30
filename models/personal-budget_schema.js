const mongoose = require('mongoose');

const personalbudgetSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        unique: true,
        required: true,
        minlength: 6,
    }
}, 
{collection: 'personalbudget'});

module.exports = mongoose.model('personalbudget', personalbudgetSchema);

