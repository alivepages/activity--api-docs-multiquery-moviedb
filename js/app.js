var key = 'ad87e3b40153e152dcf276e63868653c';
var request = superagent
  .get('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&sort_by=popularity.desc&page=1')
  .then(function(data) {
    var movie = data.body.results[0].title;
    var movie_id = data.body.results[0].id;
    document.querySelector('.movie-title mark').textContent = movie;
    return movie_id;
  })
  .then(function(movie_id){
    var request = superagent
    .get('http://api.themoviedb.org/3/movie/'+movie_id+'/casts?api_key='+key)
    .then(function(data) {
      var cant = data.body.cast.length;
      document.querySelector('.cast-count mark').textContent = cant;
    })
  })
