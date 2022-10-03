import placeholder from "../assets/placeholder.png"
export default function getMovieImage(path) {
  return path ? `https://image.tmdb.org/t/p/w300/${path}` : placeholder
}
