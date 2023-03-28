const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const todoSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        minLength:3,
        maxLength:20
    },
    status: {
        type: String,
        enum: ["todo", "in-progress","done"]
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;