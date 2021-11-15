const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }, //tieu de
    desc: { type: String, required: true }, //mo ta
    img: { type: String, required: true }, //hinh anh
    categories: { type: Array }, // danh muc
    size: { type: Array }, //kich thuoc
    color: { type: Array },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);