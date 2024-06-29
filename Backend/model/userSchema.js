const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    pdfUrl: String, // Added to store PDF URL
})

const user = mongoose.model('User', userSchema)

module.exports = user