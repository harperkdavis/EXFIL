const mongoose = require("mongoose");
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid.v4
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    guest: {
        type: Boolean,
        default: false,
    },
    moderator: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("user", userSchema);