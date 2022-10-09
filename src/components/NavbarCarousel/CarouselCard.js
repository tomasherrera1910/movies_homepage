import DisplayGenres from "../MovieCard/DisplayGenres"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import styles from "./newMoviesSlider.module.css"
const { headerContainer, genres, watchTrailerButton, spanReleaseDate } = styles
export default function CarouselCard({ movie }) {
  return (
    <div className={`${headerContainer}`}>
      <h3>{movie.title}</h3>
      <DisplayGenres genres={movie.genre_ids} style={genres} separator=" - " />
      <a
        className={watchTrailerButton}
        href={`https://www.youtube.com/results?search_query=${movie.title}%20trailer`}
        target="_blank"
        rel="noreferrer"
      >
        Watch Trailer <FontAwesomeIcon icon={faCirclePlay} />
      </a>
      <p>In theathers</p>
      <span className={spanReleaseDate}>
        {new Date(movie.release_date).toLocaleDateString()}
      </span>
    </div>
  )
}
