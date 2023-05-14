const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    userType: {
        type: String,
        required: true,
        enum : ['doctor','client','admin'],
        default: 'client'
    }, 
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    profileImage: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        maxlength: 200,
    },
    gender: {
        type: String,
        enum : ['male','female','other', 'unidentified'],
        default: 'unidentified'
    }
}));

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        userType: Joi.string().required(),
        phoneNumber: Joi.string().min(11).required(),
        gender: Joi.string().required(),
        profileImage: Joi.string().required(),
        userAddress: Joi.string().max(200).required()

    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;


/*
imge profile
address
phone
bio
gender
*/