var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmdirectorschema = new Schema({
    id: {type:Number, required: true},
    film_id:{ type:Number, required: true},
    director_id:{ type: Number, required: true}
})

module.exports = mongoose.model('FilmDirector', filmdirectorschema)