var movies = require('./movies.js');

module.exports = function(app){

	app.get('/', function(request, response){
		console.log("in routes app.get(root))");
		movies.index(request, response);
	});
  app.get('/movies', function(request, response){
		console.log("in routes app.get(/movies))");
		movies.showMovies(request, response);
	});
  app.get('/test', function(request, response){
		console.log("in routes app.get(test)");
		movies.test(request, response);
	});
}
