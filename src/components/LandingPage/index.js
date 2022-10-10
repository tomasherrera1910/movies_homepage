import { useMovies } from "../../hooks/useMovies"
import { useFavs } from "../../hooks/useFavs"
import NavbarCarousel from "../NavbarCarousel"
import Navbar from "../Navbar"
import MovieCard from "../MovieCard"
import Footer from "../Footer"
import NextPageButton from "../NextPageButton"

import styles from "./landingPage.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
const { container, mainSectionContainer, cardContainer } = styles

export default function LandingPage() {
  const {
    movies,
    moviesVotesAverage,
    pageInfo,
    searchInputValue,
    search,
    sliderValue,
    viewGrid,
    setViewGrid,
    loading,
    loadingMoreMovies,
    handlePage,
    setSearchInputValue,
    handleSubmitSearch,
    handleChangeSlider,
  } = useMovies()
  const { favs, addLocalStorage, removeLocalStorage, isFav } = useFavs()

  return (
    <main className={container}>
      <NavbarCarousel />
      <section className={mainSectionContainer}>
        <Navbar
          setSearch={setSearchInputValue}
          onSubmitSearch={handleSubmitSearch}
          search={searchInputValue}
          onChangeSlider={handleChangeSlider}
          sliderValue={sliderValue}
          setViewGrid={setViewGrid}
          favs={favs}
          handleDeleteFav={removeLocalStorage}
        />
        <div className={cardContainer} key={search}>
          {moviesVotesAverage
            ? moviesVotesAverage.map((movie) => (
                <MovieCard
                  movie={movie}
                  viewGrid={viewGrid}
                  key={movie.id}
                  handleAddFav={addLocalStorage}
                  handleDeleteFav={removeLocalStorage}
                  isFav={isFav}
                />
              ))
            : movies.map((movie) => (
                <MovieCard
                  movie={movie}
                  viewGrid={viewGrid}
                  key={movie.id}
                  handleAddFav={addLocalStorage}
                  handleDeleteFav={removeLocalStorage}
                  isFav={isFav}
                />
              ))}
          {loading && !loadingMoreMovies && (
            <FontAwesomeIcon icon={faSpinner} spin />
          )}
        </div>
        <NextPageButton
          pageInfo={pageInfo}
          handlePage={handlePage}
          loading={loadingMoreMovies}
        />
      </section>
      <Footer />
    </main>
  )
}
