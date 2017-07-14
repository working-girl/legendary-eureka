var config = {
	 
	 //PORT    : 4000 , 

	 PORT : process.argv[2] || '4000',

	 mongodb : "mongodb://localhost:27017/gowalla"
	
}

module.exports = config 