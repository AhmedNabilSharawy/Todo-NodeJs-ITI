const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
        // required: [true,"Please enter email address"]
    },
    phone: {
        type: String,
        required: [true,"Please enter your phone"]

    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,

    }
})

userSchema.pre("save", async function (next) {
    // this function runs only if password has modified
    if (!this.isModified("password")) {
        return next();
    }
    // hashing password
    this.password = await bcrypt.hash(this.password,12);
    // remove confirmed password value 'no longer needed'
    this.confirmPassword = undefined;
    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;