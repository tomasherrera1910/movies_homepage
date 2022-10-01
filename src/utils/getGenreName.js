import { getGenres } from "./getMovies"

let genres = []
getGenres().then((data) => (genres = data.genres))

export function getGenreName(id) {
  const { name } = genres.find((genre) => id === genre.id)
  return name
}
