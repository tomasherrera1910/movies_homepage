const API_KEY = process.env.REACT_APP_API_KEY

export async function getMovies(page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((response) => response.json())
}

export async function getGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json())
}
export async function getUpcomingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json())
}
export async function getBackdropMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json())
}
