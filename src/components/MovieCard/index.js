import { useState } from "react"
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DisplayGenres from "./DisplayGenres"
import ModalMovieDetail from "../ModalMovieDetail"
import getMovieImage from "../../utils/getMovieImage"

import styles from "./movieCard.module.css"
const {
  movieCardStyle,
  movieCardFooter,
  rightFooterDecoration,
  genres,
  genresSimple,
  movieCardSimple,
} = styles

export default function MovieCard({
  movie,
  viewGrid,
  handleAddFav,
  handleDeleteFav,
  isFav,
}) {
  const [modal, setModal] = useState(false)
  const modalHandle = () => setModal(!modal)
  return (
    <>
      <article
        className={viewGrid ? movieCardStyle : movieCardSimple}
        onClick={modalHandle}
      >
        <img src={getMovieImage(movie.poster_path)} alt={movie.title} />
        <footer className={movieCardFooter}>
          <h3>{movie.title.toUpperCase()}</h3>
          <DisplayGenres
            genres={movie.genre_ids}
            style={viewGrid ? genres : genresSimple}
          />
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
      <ModalMovieDetail
        movie={movie}
        modal={modal}
        modalHandle={modalHandle}
        handleAddFav={handleAddFav}
        handleDeleteFav={handleDeleteFav}
        isFav={isFav}
      />
    </>
  )
}
