var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var edgeSchema = new Schema({
    id: 		{type: Schema.Types.ObjectId},
    source: 	{type: String, required: true},
    target:     {type: String, required: true}
});

var EdgesModel = mongoose.model('Edge', edgeSchema);

module.exports = EdgesModel;