const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: String,
    completed: String,
}, { timestamps: true });

const Task = mongoose.model('sprint15_CH2', UserSchema);

module.exports = { Task };