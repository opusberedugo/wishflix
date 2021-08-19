const mainSection = document.querySelector("main .search-results");
let searchTerm = sessionStorage.getItem("searchTerm");
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


document.title = `${searchTerm} - Search Results`


const createMovieCard = (movie) => {
  let card = document.createElement("div");
  card.classList.add("movie")

  card.innerHTML =
    `
    <div class="img">
      <img class="popular-img" loading="lazy" src="${IMG_URL + movie.poster_path}" alt="">
    </div>
    <div class="content">
      <p class="name">${movie.title}</p>
      <button class="fav-btn">
      <svg width=24 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243c2.262 2.268 2.34 5.88.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404-1.503-1.499-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.991-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451l8.432 8.446L12 21.485 3.52 12.993c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228z"/>
      </svg>
      </button>
    </div>
  </div>
    `;

  return card;
}

let pageN = 0;

function fetchMovies() {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=7f5a1f278f0641ca5e76e5ad1cc4829a&language=en-US&query=${searchTerm}&page=${++pageN}&include_adult=false`;
  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
    data.results.forEach((v, i) => {

      mainSection.append(createMovieCard(v));
    });
  })
}


document.addEventListener('DOMContentLoaded', fetchMovies);




const searchButton = document.querySelector("button");
const searchField = document.querySelector("input");



searchButton.onclick = () => {
  searchTerm = searchField.value.trim();
  document.querySelectorAll("div.card").forEach((v) => {
    mainSection.removeChild(v)

  })
}

document.onscroll = () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    fetchMovies();
  }
}