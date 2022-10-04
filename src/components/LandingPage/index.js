import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getMovies } from "../../utils/getMovies"
import NewMoviesSlider from "../NewMoviesSlider"
import Navbar from "../Navbar"
import MovieCard from "../MovieCard"
import Footer from "../Footer"
import NextPageButton from "../NextPageButton"

import styles from "./landingPage.module.css"
const { container, mainSectionContainer, cardContainer } = styles

export default function LandingPage() {
  const [movies, setMovies] = useState([])
  const [moviesVotesAverage, setMoviesVotesAverage] = useState(null)
  const [pageInfo, setPageInfo] = useState({ page: 1, totalPages: 2 })
  const [searchInputValue, setSearchInputValue] = useState("")
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const search = query.get("search")
  const [sliderValue, setSliderValue] = useState(1)
  const [viewGrid, setViewGrid] = useState(true)
  const [loading, setLoading] = useState(true)
  const [loadingMoreMovies, setLoadingMoreMovies] = useState(false)

  useEffect(() => {
    getMovies(
      search
        ? `/search/movie?query=${search}&page=${pageInfo.page}`
        : `/discover/movie?page=${pageInfo.page}`
    )
      .then((data) => {
        pageInfo.page !== 1
          ? setMovies((prevMovies) => prevMovies.concat(data.results))
          : setMovies(data.results)
        setPageInfo((prevPageInfo) => {
          return { ...prevPageInfo, totalPages: data.total_pages }
        })
      })
      .finally(() => {
        setLoadingMoreMovies(false)
        setLoading(false)
      })
  }, [pageInfo.page, search])

  const handlePage = () => {
    setLoadingMoreMovies(true)
    setMoviesVotesAverage(null)
    setPageInfo((prevPageInfo) => {
      return { ...prevPageInfo, page: prevPageInfo.page + 1 }
    })
  }

  const handleChangeSearch = (e) => setSearchInputValue(e.target.value)

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    setMoviesVotesAverage(null)
    setMovies([])
    setPageInfo((prevPageInfo) => {
      return {
        ...prevPageInfo,
        page: 1,
      }
    })
    navigate(`/?search=${searchInputValue}`)
  }
  const handleChangeSlider = (e) => {
    setSliderValue(e.target.value)
    setMoviesVotesAverage(
      movies.filter((movie) => movie.vote_average >= e.target.value)
    )
  }

  if (loading) return <span>Loading movies... 😎</span>
  return (
    <main className={container}>
      <NewMoviesSlider />
      <section className={mainSectionContainer}>
        <Navbar
          onChangeSearch={handleChangeSearch}
          onSubmitSearch={handleSubmitSearch}
          search={searchInputValue}
          onChangeSlider={handleChangeSlider}
          sliderValue={sliderValue}
          setViewGrid={setViewGrid}
        />
        <div className={cardContainer} key={search}>
          {moviesVotesAverage
            ? moviesVotesAverage.map((movie) => (
                <MovieCard movie={movie} viewGrid={viewGrid} key={movie.id} />
              ))
            : movies.map((movie) => (
                <MovieCard movie={movie} viewGrid={viewGrid} key={movie.id} />
              ))}
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
