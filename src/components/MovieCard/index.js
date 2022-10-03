import { useState } from "react"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DisplayGenres from "./DisplayGenres"
import ModalMovieDetail from "../ModalMovieDetail"
import getMovieImage from "../../utils/getMovieImage"

import styles from "./movieCard.module.css"
const { movieCardStyle, movieCardFooter, rightFooterDecoration, genres } =
  styles

export default function MovieCard({ movie }) {
  const [modal, setModal] = useState(false)
  const modalHandle = () => setModal(!modal)
  return (
    <>
      <article className={movieCardStyle} onClick={modalHandle}>
        <img src={getMovieImage(movie.poster_path)} alt={movie.title} />
        <footer className={movieCardFooter}>
          <h3>{movie.title.toUpperCase()}</h3>
          <DisplayGenres genres={movie.genre_ids} style={genres} />
          <p>
            <FontAwesomeIcon icon={faHeart} color="rgb(214, 49, 49)" />{" "}
            {movie.vote_average}
          </p>
          <FontAwesomeIcon
            icon={faStar}
            color="#fff"
            className={rightFooterDecoration}
          />
        </footer>
      </article>
      <ModalMovieDetail movie={movie} modal={modal} modalHandle={modalHandle} />
    </>
  )
}
