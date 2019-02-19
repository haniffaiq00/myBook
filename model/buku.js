const mongoose = require('mongoose')

const bukuSchema = mongoose.Schema({
    namaBuku : String,
    namaPenerbit : String,
    tahun : String
});

module.exports = mongoose.model("buku", bukuSchema)