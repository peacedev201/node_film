var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    id: {type:Number, required: true},
    name:{ type:String, required: true}
})

module.exports = mongoose.model('Category', categorySchema)