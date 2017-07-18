var express = require('express');
var router = express.Router();
var Edge = require('../models/edges.model')

/* GET relations. */
router.get('/:id', function(req, res, next) {

	console.log('Der hentes data paa bruger: '+req.params.id)

    Edge.find({"source" : req.params.id})
  			.exec(function(err, docs) {
	  			if (err) {
	  				return res.status(500).json({
	  					title: 'An error occurred',
	  					error: err
	  				});
	  			}
	  			res.status(200).json({
	  				message: 'Success',
	  				edges: docs
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
