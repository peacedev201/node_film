var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmschema = new Schema({
    id: {type:Number, required: true},
    img:{ type:String, required: true},
    title:{ type: String, required: true},
    original_title:{ type: String, required: true},
    year: { type: String, required: true},
    imdb_id: { type: String}
})

module.exports = mongoose.model('Film', filmschema)