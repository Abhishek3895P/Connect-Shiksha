const mongoose = require('mongoose');


const Sylkabusschema = new mongoose.Schema({
    Name: { type: String },
    iscompleted: { type: Boolean },
}, { _id: false });

const Batch_Schema = new mongoose.Schema({
    Title:{
        type:String,
    },
    Images:{
        type:[String]
    },Price:{
        type:Number
    },Discount:{
        type:Number
    },Discription:{
        type:String
    },Start:{
        type:Number
    },End:{
        type:Number
    },Sylabus:{
        type:[Sylkabusschema]
    },
});


//creates a table books
const User = mongoose.model('Batches', Batch_Schema);
module.exports = User;