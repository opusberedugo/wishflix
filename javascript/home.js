const popularSection = document.querySelector("section.trending");
let popularMovies = [];

const createMovieCard = (movie) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("img");

  let image = document.createElement("img");
  image.src = IMG_URL + movie.poster_path;

  imageDiv.appendChild(image);

  let contentDiv = document.createElement("div");
  contentDiv.classList.add("content")


  let titleP = document.createElement("p");
  titleP.textContent = movie.title;

  let overviewP = document.createElement("p");
  overviewP.textContent = movie.overview;

  let releaseDateP = document.createElement("p");
  releaseDateP.textContent = movie.release_date;

  let ratingP = document.createElement("p");
  ratingP.textContent = movie.vote_average;

  contentDiv.append(titleP)
  contentDiv.append(overviewP)
  contentDiv.append(releaseDateP)
  contentDiv.append(ratingP)

  card.appendChild(imageDiv)
  card.appendChild(contentDiv)
  return card;


}

const correctImages = () => {}


window.onload = () => {
  fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a").then((response) => {
    // console.log(response.json().results);
    return response.json();
  }).then((data) => {
    popularMovies = data.results;
  }).finally(() => {

    popularMovies.forEach((v) => {
      popularSection.append(createMovieCard(v));
    })
    console.clear();
  })
}