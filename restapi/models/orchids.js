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
    price: {
        type: Number,
        required: true
    },
    original:
    {
        type: String,
        required: true
    },
    isNatural: {
        type: Boolean,
        required: true
    },
    color:
    {
        type: String,
        required: true
    },
}, { timestamps: true });

const Orchids = mongoose.model('orchids', orchidSchema)
module.exports = Orchids
