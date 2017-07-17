var express = require('express');
var router = express.Router();
var Checkin = require('../models/checkins.model');

/* GET relations. */
router.get('/', function(req, res, next) {

    Checkin.find({"userid" : 4})
  			.exec(function(err, checkins) {
	  			if (err) {
	  				return res.status(500).json({
	  					title: 'An error occurred',
	  					error: err
	  				});
	  			}
	  			res.status(200).json({
	  				message: 'Success',
	  				result: checkins
  			});
  		});			
});

module.exports = router;
