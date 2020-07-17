var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userPermissionschema = new Schema({
    user_id:{ type:Number, required: true},
    permission_id:{ type: Number, required: true}
})

module.exports = mongoose.model('UserPermission', userPermissionschema)