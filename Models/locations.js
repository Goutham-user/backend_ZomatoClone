const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const locationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('locationsData', locationSchema, 'locations')