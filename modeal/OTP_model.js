const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    mobno:{
        type:Number,
    },
    otp:{
        type:Number
    },
});


//creates a table books
const User = mongoose.model('OTP', OTPSchema);
module.exports = User;