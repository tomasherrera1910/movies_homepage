import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./modalMovieDetail.module.css"
import MovieDetailsInfo from "./MovieDetailsInfo"
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
} = styles
export default function ModalMovieDetail({ movie, modal, modalHandle }) {
  return (
    <dialog open={modal} className={modalStyles}>
      <div className={mainContainer}>
        <article className={cardDetail}>
          <button onClick={modalHandle} className={closeModal}>
            X
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={rightSection}>
            <section className={sectionMovieInfo}>
              <MovieDetailsInfo movie={movie} />
            </section>
            <section className={sectionMovieDescription}>
              <p>{movie.overview}</p>
              <span className={spanMovieProfile}>FULL MOVIE PROFILE ➡</span>
            </section>
            <div>
              <button className={buttonWatchTrailer}>
                Watch Trailer <FontAwesomeIcon icon={faPlay} />
              </button>
              <button className={buttonWatchlist}>
                To Watchlist <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </dialog>
  )
}
