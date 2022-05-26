const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    session: {
        type: String,
        unique: true,
    },
    expires: {
        type: Date,
    },
});

module.exports = mongoose.model("session", sessionSchema);