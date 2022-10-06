import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getMovieImage from "../../utils/getMovieImage"
import MovieDetailsInfo from "./MovieDetailsInfo"
import styles from "./modalMovieDetail.module.css"
const {
  modalStyles,
  mainContainer,
  cardDetail,
  closeModal,
  rightSection,
  sectionMovieInfo,
  sectionMovieDescription,
  spanMovieProfile,
  buttonWatchTrailer,
  buttonWatchlist,
  buttonRemoveFav,
} = styles
export default function ModalMovieDetail({
  movie,
  modal,
  modalHandle,
  handleAddFav,
  handleDeleteFav,
  isFav,
}) {
  return (
    <dialog open={modal} className={modalStyles}>
      <div className={mainContainer}>
        <article className={cardDetail}>
          <button onClick={modalHandle} className={closeModal}>
            X
          </button>
          <img src={getMovieImage(movie.poster_path)} alt={movie.title} />
          <div className={rightSection}>
            <section className={sectionMovieInfo}>
              <MovieDetailsInfo movie={movie} />
            </section>
            <section className={sectionMovieDescription}>
              <p>{movie.overview}</p>
              <span className={spanMovieProfile}>FULL MOVIE PROFILE ➡</span>
            </section>
            <div>
              <a
                className={buttonWatchTrailer}
                href={`https://www.youtube.com/results?search_query=${movie.title}%20trailer`}
                target="_blank"
                rel="noreferrer"
              >
                Watch Trailer <FontAwesomeIcon icon={faPlay} />
              </a>
              {isFav(movie.id) ? (
                <button
                  className={buttonRemoveFav}
                  onClick={() => handleDeleteFav(movie.id)}
                >
                  Remove from Watchlist <FontAwesomeIcon icon={faStar} />
                </button>
              ) : (
                <button
                  className={buttonWatchlist}
                  onClick={() => handleAddFav(movie)}
                >
                  To Watchlist <FontAwesomeIcon icon={faStar} />
                </button>
              )}
            </div>
          </div>
        </article>
      </div>
    </dialog>
  )
}
