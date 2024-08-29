const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    domain: { type: String, required: true },
    gender: { type: String, required: true },
    available: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', userSchema);
