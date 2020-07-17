var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmcategoryschema = new Schema({
    id: {type:Number, required: true},
    film_id:{ type:Number, required: true},
    category_id:{ type: Number, required: true}
})

module.exports = mongoose.model('FilmCategory', filmcategoryschema)