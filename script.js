function displayMovies(movies) {
  const moviesList = document.getElementById("movies-list");
  movies.forEach((movie) => {
    const movieCard = `
            <div class="col-md-3 mb-3">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.overview}</p>
                    </div>
                </div>
            </div>
        `;
    moviesList.innerHTML += movieCard;
  });
}

function searchMovies() {
  const query = document.getElementById("search-input").value.trim();
  const search = document.getElementById("search-input");

  if (query === "") {
    alert("Please enter a search query.");
    return;
  }

  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f8464be9f3d2f38312b640ed06637fce&query=${query}`
  )
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.results);
    })
    .catch((error) => console.error("Error searching movies:", error));
}

function displayMovies(movies) {
  const moviesList = document.getElementById("movies-list");
  moviesList.innerHTML = ""; // Clear previous search results

  movies.forEach((movie) => {
    const movieCard = `
            <div class="col-md-3 mb-3">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.overview}</p>
                    </div>
                </div>
            </div>
        `;
    moviesList.innerHTML += movieCard;
  });
}
