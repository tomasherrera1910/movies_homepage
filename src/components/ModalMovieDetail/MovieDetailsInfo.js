import DisplayGenres from "../MovieCard/DisplayGenres"
import {
  faHeart,
  faThumbsUp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./modalMovieDetail.module.css"
const {
  divDetailsMovie,
  sectionMovieTitle,
  sectionMovieStats,
  publishDate,
  genres,
  title,
} = styles

export default function MovieDetailsInfo({ movie }) {
  return (
    <div className={divDetailsMovie}>
      <section className={sectionMovieTitle}>
        <h3 className={title}>{movie.title}</h3>
        <div>
          <DisplayGenres genres={movie.genre_ids} style={genres} />
          <span className={publishDate}>{movie.release_date}</span>
        </div>
      </section>
      <section className={sectionMovieStats}>
        <label>
          <FontAwesomeIcon icon={faHeart} color="rgb(214, 49, 49)" />
          {" " + movie.vote_average}
          <span>Rating</span>
        </label>
        <label>
          <FontAwesomeIcon icon={faThumbsUp} color="rgb(66, 98, 206)" />
          {" " + movie.vote_count}
          <span>Score</span>
        </label>
        <label>
          <FontAwesomeIcon icon={faTrophy} color="#ffd700" /> 0
          <span>Awards</span>
        </label>
      </section>
    </div>
  )
}
