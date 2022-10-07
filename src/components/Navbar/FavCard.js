import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getMovieImage from "../../utils/getMovieImage"
import styles from "./favCard.module.css"
const { cardFavStyle, deleteFav } = styles
export default function FavCard({ movie, handleDeleteFav }) {
  return (
    <article className={cardFavStyle}>
      <a
        href={`https://www.youtube.com/results?search_query=${movie.title}%20trailer`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={getMovieImage(movie.poster_path)} alt={movie.title} />
      </a>
      <h3>{movie.title}</h3>
      <button className={deleteFav} onClick={() => handleDeleteFav(movie.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  )
}
