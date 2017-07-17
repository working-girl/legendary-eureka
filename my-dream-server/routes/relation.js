var express = require('express');
var router = express.Router();
var Relation = require('../models/relations.model');
var Checkin = require('../models/checkins.model');

/* GET relations. */
router.get('/:id', function(req, res, next) {

	console.log('Der hentes data paa bruger: '+req.params.id)

    Relation.find({"source" : req.params.id})
  			.exec(function(err, relations) {
	  			if (err) {
	  				return res.status(500).json({
	  					title: 'An error occurred',
	  					error: err
	  				});
	  			}
	  			res.status(200).json({
	  				message: 'Success',
	  				relations: relations
  			});
  		});	

				
});

/*router.get('/', function(req, res, next) {
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
	  				checkins: checkins
  			});
  		});
});*/

module.exports = router;
