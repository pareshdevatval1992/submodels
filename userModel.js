const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    DOB: Date,
    gender: String,
    email: { type: String, unique:true, required: true },
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Users', userSchema);
