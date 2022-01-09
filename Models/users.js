const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema =  new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lasstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName:{
        type: String,
        requied: true,
        trim: true,
        index: true,
        lowercase: true,
        unique: true        
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactNumber:{
        type: String
    },
    profilePicture:{
        type: String
    }
}, { timestamps : true});


module.exports = mongoose.model('userData', userSchema, 'users' )