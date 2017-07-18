var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nodeSchema = new Schema({
    _id: 		{type: Schema.Types.ObjectId},
    user: 		{type: String, required: true},
    time:    	{type: String, required: true},
    lat: 		{type: String, required: true},
    long: 		{type: String, required: true},
    loc_id: 	{type: String, required: true}
});

var NodeModel = mongoose.model('Node', nodeSchema);

module.exports = NodeModel;