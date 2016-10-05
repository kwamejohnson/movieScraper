console.log("movies controller");


module.exports = (function(){
	return {
			index: function(request, response){
				console.log("movies server side controller (INDEX method)");

var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.fandango.com/bellevuelincolnsquarecinemas_aatvl/theaterpage?date=10%2f3%2f2016";

	request(url, (function() { return function(err, resp, body) {

			var movies = [];
			var ratings = []
			var durations = []
			var Sts = []

			var st = []
			$ = cheerio.load(body);

			$('.showtimes-movie-detail .showtimes-movie-title').each(function(movie) {
				var movieName = $(this).text();

				movies.push({ name: movieName,
										});
			});
			var counter = 0
											$('.showtimes-movie-detail .showtimes-movie-rating-runtime').each(function(movie) {
												var movieDeets = $(this).text();
												// console.log("length: ", movieDeets.length);
												var rating = movieDeets.slice(-115, -108).trim()
												var duration = movieDeets.slice(112, -29).trim()
												console.log("====================");
												console.log("rating: ", rating);
												console.log("duration: ", duration);

												ratings.push(rating)
												durations.push(duration)

											});

											console.log("RATINGS: \n", ratings);
											console.log("DURATIONS: \n", durations);


												$('.showtimes-times-area .showtimes-times').each(function(movie) {

													var showTimes = $(this).text().split("\n");
													var showTimesC = []

													for (var i = 0; i < showTimes.length; i++) {
														var C = showTimes[i].trim();
														if (C !== ""){
															showTimesC.push(C);
														}
													}

													console.log("~~~~~~~~~~~~~~~~~");
													console.log("showtimes: ", counter, " | ", showTimesC);
													Sts.push(showTimesC)
													counter ++;

											})

					for (var j = 0; j < movies.length; j++) {
						movies[j].rating = ratings[j]
						movies[j].duration = durations[j]
						movies[j].showtimes = Sts[j]
					}
					console.log("______________________________");
					console.log("MOVIES \n", "number of movies: ", movies.length, "\n", movies);

response.json(movies)
			};

	})());



			},
			test: function (request,response){
				var testMessage = 'Work Dammit'
				console.log("movies server side controller (TEST method)");
				console.log(response);
				response.json(testMessage)
			}
	}
})()
