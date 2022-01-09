const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const restaurentsSchema = new Schema({
    mealtype: {
        type: Number,
        required: true
    },
    location: {
        type: String,
    },
    id: {
        type: Number
    },
    lcost:{
        type: Number
    },
    hcost:{
        type: Number
    },
    sort:{
        type: Number
    },
    page: {
        type: Number
    },
    itemsPerPage: {
        type: Number
    },
    city:{
        type:String
    }
    

    // location, mealType, cuisine , lcost, hcost, sort, page


})

module.exports = mongoose.model('restaurentsData', restaurentsSchema, 'reasturents_data');