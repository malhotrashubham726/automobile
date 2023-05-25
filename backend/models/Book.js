const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user" 
    },
    phonenumber: {
        type : String,
        required : true
    },
    carmake: {
        type : String,
        required : true
    },
    carmodel: { 
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true
    },
    date: {
        type : Date,
        default : Date.now
    },
    service: {
        type : String
    },
    fuel : {
        type : String
    }
})

const Booking = mongoose.model("booking" , BookingSchema);

module.exports = Booking;