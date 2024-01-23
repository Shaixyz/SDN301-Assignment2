const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orchidSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // ko trùng tên
    },
    image: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    isNature: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Orchids = mongoose.model('orchids', orchidSchema)
module.exports = Orchids
