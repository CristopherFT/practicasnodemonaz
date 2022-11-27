'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaCancion = Schema({
    numero: String,
    name: String,
    duracion: String,
    file: String,
    album: String,

})
module.exports = mongoose.model('Cancion', EsquemaCancion);