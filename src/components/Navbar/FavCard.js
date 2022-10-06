import getMovieImage from "../../utils/getMovieImage"
export default function FavCard({ movie }) {
  return (
    <article>
      <img src={getMovieImage(movie.poster_path)} alt={movie.title} />
    </article>
  )
}
