import { useState, useEffect } from "react"
import DisplayGenres from "../MovieCard/DisplayGenres"
import { getUpcomingMovies } from "../../utils/getMovies"

import styles from "./newMoviesSlider.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
const { header, headerContainer, genres, watchTrailerButton, spanReleaseDate } =
  styles
export default function NewMoviesSlider() {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [backdropImageStyle, setBackdropImageStyle] = useState({})

  useEffect(() => {
    getUpcomingMovies().then(({ results }) =>
      setUpcomingMovies(
        results.filter((movie) => new Date(movie.release_date) > Date.now())
      )
    )
  }, [])
  useEffect(() => {
    if (upcomingMovies.length) {
      setBackdropImageStyle({
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${upcomingMovies[0].backdrop_path})`,
      })
    }
  }, [upcomingMovies])

  if (!upcomingMovies.length) return <p>Cargando navbar...</p>
  return (
    <header className={header} style={backdropImageStyle}>
      <div className={headerContainer}>
        <h3>{upcomingMovies[0].title}</h3>
        <DisplayGenres
          genres={upcomingMovies[0].genre_ids}
          style={genres}
          separator=" - "
        />
        <button className={watchTrailerButton}>
          Watch Trailer <FontAwesomeIcon icon={faCirclePlay} />
        </button>
        <p>In theathers</p>
        <span className={spanReleaseDate}>
          {new Date(upcomingMovies[0].release_date).toLocaleDateString()}
        </span>
      </div>
    </header>
  )
}
