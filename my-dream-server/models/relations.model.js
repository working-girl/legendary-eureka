var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var relationSchema = new Schema({
    id: 		{type: Schema.Types.ObjectId},
    source: 	{type: Number, required: true},
    target:     {type: Number, required: true}
});

var RelationModel = mongoose.model('Connection', relationSchema);

module.exports = RelationModel;