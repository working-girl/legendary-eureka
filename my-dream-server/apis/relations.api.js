var Relation = require('../models/relations.model');

var api = {

	getRelations : function(req, res){
		console.log('hello');
		Relation.find({}, function(err, docs) {
	      if(err) return console.error(err);
	      res.json(docs);
	    })		
		/*Relation.find({"source" : 0})
  			.exec(function(err, relations) {
	  			if (err) {
	  				return res.status(500).json({
	  					title: 'An error occurred',
	  					error: err
	  				});
	  			}
	  			res.status(200).json({
	  				message: 'Success',
	  				obj: relations
  			});
  		});*/

	},




	getRelationsUser : function(req,res){
		
	    var query =  { user : req.params.username }

	    console.log(query)

	    Relation.find(query ,function(err, data) {
	      if(err) return console.error(err);

	      res.json(data);	
	      
	    })

	}
}
module.exports = api