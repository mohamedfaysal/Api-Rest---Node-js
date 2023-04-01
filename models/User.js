const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String },
    email: { type: String, required: true},
})

module.exports = mongoose.model('User', userSchema);