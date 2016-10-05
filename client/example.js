var request = require('request');
var cheerio = require('cheerio');

// var movies =[
//                 {
//                 name: "X",
//                 duration: 120,
//                 showtimes: []
//                 }
//             ]

var url = "http://www.fandango.com/bellevuelincolnsquarecinemas_aatvl/theaterpage?date=10%2f3%2f2016";



    request(url, (function() { return function(err, resp, body) {

        var movies = [];

        $ = cheerio.load(body);
        $('.showtimes-movie-detail .showtimes-movie-title').each(function(movie) {
          var movieName = $(this).text();
          console.log("movie: ", $(this).text());

          movies.push({ name: movieName,
                      });
        });

            // $(this).find('div').each(function() {
            //     event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
            //     if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
            //         console.log(pool + ',' + days[day] + ',' + event[0] + ',' + event[1]);
            // });

            // for (var i = 0; i < movies.length; i++){
            var counter = 0
            $('.showtimes-movie-detail .showtimes-movie-rating-runtime').each(function(movie) {
              var movieDeets = $(this).text();
              console.log("length: ", movieDeets.length);
              movies[counter].rating = movieDeets.slice(-115, -108).trim();
              movies[counter].duration = movieDeets.slice(112, -29).trim();


              // movies[counter].deets = movieDeets.trim();
              // movies[counter].deets = movieDeets.slice(137, -29);

              console.log("deets for movie number:", counter, " | ", movieDeets);
              counter ++;
            });
          console.log("______________________________");
          console.log("movies", movies);

        // });
      };




    })());
