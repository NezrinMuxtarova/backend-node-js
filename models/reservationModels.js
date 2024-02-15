const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReservationSchema = new Schema({
  firstNameReservation: { type: String, required: true },
  lastNameReservation: { type: String, required: true },
  emailReservation: { type: String, required: true },
  phoneReservation: { type: String, required: true },
  typeSelecet: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

const reservationModel = mongoose.model("Reservation", ReservationSchema);
module.exports = reservationModel ;
