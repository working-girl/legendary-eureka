var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nodeSchema = new Schema({
    id: 			{type: Schema.Types.ObjectId},
    userid: 		{type: String, required: true},
    checkintime:    {type: String, required: true},
    latitude: 		{type: String, required: true},
    longitude: 		{type: String, required: true},
    locationid: 	{type: String, required: true}
});

var NodeModel = mongoose.model('Checkin', nodeSchema);

module.exports = NodeModel;