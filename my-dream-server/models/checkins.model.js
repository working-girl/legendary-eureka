var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checkinSchema = new Schema({
    id: 			{type: Schema.Types.ObjectId},
    userid: 		{type: Number, required: true},
    checkintime:    {type: String, required: true},
    latitude: 		{type: String, required: true},
    longitude: 		{type: String, required: true},
    locationid: 	{type: String, required: true}
});

var CheckinModel = mongoose.model('Checkin', checkinSchema);

module.exports = CheckinModel;