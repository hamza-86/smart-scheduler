const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: Date,
  doctor: String,
  reason: String
}, {
  timestamps: true
});

module.exports = mongoose.model("Appointment", appointmentSchema);
