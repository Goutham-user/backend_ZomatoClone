const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const widgitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('widgit', widgitSchema, 'widgit');