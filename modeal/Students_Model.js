const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:String,
        required:true,
        unique:true
    },
    Subject:[String]
});


//creates a table books
const User = mongoose.model('Students', StudentSchema);
module.exports = User;