var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var directorSchema = new Schema({
    id: {type:Number, required: true},
    name:{ type:String, required: true}
})

module.exports = mongoose.model('Director', directorSchema)