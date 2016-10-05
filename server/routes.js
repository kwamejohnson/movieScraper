var movies = require('./movies.js');

module.exports = function(app){

	app.get('/', function(request, response){
		console.log("in routes");
		movies.index(request, response);
	});
  app.get('/test', function(request, response){
		console.log("in routes");
		movies.test(request, response);
	});
}
