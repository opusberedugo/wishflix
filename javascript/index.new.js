let alreadyfavSVG_HTML =
  `<svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
  </svg>
`;

let faveSVG_HTML =
  `
  <svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
  </svg>
`;

let popularSection = document.getElementById("popular-movies-section");
let popularMovies = [];
let genres = [];
let genreIndex = 0

let modalImage = document.getElementById(".details-modal img");
let detailsModal = document.querySelector(".details-modal");
let mainSection = document.querySelector("main");

const createMovieCard = (movie) => {
  let card = document.createElement("div");
  card.classList.add("movie")

  card.innerHTML =
    `
    <div class="img">
      <img class="popular-img" loading="lazy" src="${IMG_URL + movie.poster_path}" alt=" ">
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

const createMovieSection = (genre) => {
  let section = document.createElement("section");
  section.classList.add("popular");

  let moviesDiv = document.createElement("div");
  moviesDiv.classList.add("movies");

  let h2 = document.createElement("h2");
  h2.textContent = ` Trending ${genre.name} `

  section.appendChild(h2);


  fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a`).then((response) => {
    return response.json();
  }).then((data) => {
    data.results.forEach((v, i) => {
      moviesDiv.appendChild(createMovieCard(v));
    });
  }).finally(() => {
    section.appendChild(moviesDiv)
    mainSection.appendChild(section)
  })

}

window.onload = () => {
  fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f5a1f278f0641ca5e76e5ad1cc4829a").then((response) => {
    // console.log(response.json().results);
    return response.json();
  }).then((data) => {
    popularMovies = data.results;
  }).finally(() => {

    popularMovies.forEach((v) => {
      popularSection.append(createMovieCard(v));
    });

    document.querySelectorAll(".popular .movie").forEach((v, i) => {
      v.onclick = () => {

        let popularImages = document.getElementsByClassName("popular-img");
        // modalImage.src = popularImages[i].src;
        $(".details-modal").fadeIn();

        console.log(popularImages[i].src)

      }
    });

  })

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7f5a1f278f0641ca5e76e5ad1cc4829a&language=en-US").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data.genres)
    genres = data.genres
  })
}

detailsModal.onclick = () => {
  $(detailsModal).fadeOut()
}


document.onscroll = () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    createMovieSection(genres[genreIndex]);
    genreIndex++;
  }
}