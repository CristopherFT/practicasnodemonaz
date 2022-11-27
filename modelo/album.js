'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaAlbum = Schema({
    titulo: String,
    descripcion: String,
    año: String,
    imagen: String,
    artista: String
})
module.exports = mongoose.model('Album', EsquemaAlbum);