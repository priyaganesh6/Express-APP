const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    loginName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    isUserActive: {
        type: Boolean,
        required: true,
    }

})
module.exports = mongoose.model('userManagement', userSchema)