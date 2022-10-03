const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://api.themoviedb.org/3"
export async function getMovies(path) {
  return fetch(`${API_URL}${path}&api_key=${API_KEY}`).then((response) =>
    response.json()
  )
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
