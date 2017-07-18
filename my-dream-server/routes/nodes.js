var express = require('express');
var router = express.Router();
var Node = require('../models/nodes.model');

/* GET relations. */
router.get('/:id', function(req, res, next) {

    Node.find({"user" : req.params.id})
  			.exec(function(err, docs) {
	  			if (err) {
	  				return res.status(500).json({
	  					title: 'An error occurred',
	  					error: err
	  				});
	  			}
	  			res.status(200).json({
	  				message: 'Success',
	  				nodes: docs
  			});
  		});			
});

module.exports = router;
