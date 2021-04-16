const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: String,
    description: String,
    place: String,
    date: String,
    time: String,
});

module.exports = mongoose.model("Appointment", appointmentSchema);

