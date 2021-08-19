const APIKEY = "api_key=7f5a1f278f0641ca5e76e5ad1cc4829a";
const BASE = "https://api.themoviedb.org/3";
const POPULARDESC = "/discover/movie?sort_by=popularity.desc";
const IMG_URL = 'https://image.tmdb.org/t/p/w500';





const getTrendingMoivies = (arr) => {
  let popularMovies = [];
  fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.results);
  })
}



let popularMoviesGenreURL = `${BASE}/discover/movie?with_genres=${genreID}&sort_by=popularity.desc&${APIKEY}`

// https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a
// 
//

const getTrendingMovieInCategory = (arr) => {
  fetch("https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a").then((response) => {
    console.log(response.json().results);
    return response.json();
  }).then((data) => {
    console.log(data.results);
  })
}


const getGenreList = () => {
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7f5a1f278f0641ca5e76e5ad1cc4829a&language=en-US").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.genres)
  })
}