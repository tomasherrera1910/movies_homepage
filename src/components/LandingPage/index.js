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
  const [pageInfo, setPageInfo] = useState({ page: 1, totalPages: 2 })
  const [searchInputValue, setSearchInputValue] = useState("")
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const search = query.get("search")
  const [loading, setLoading] = useState(true)
  const [loadingMoreMovies, setLoadingMoreMovies] = useState(false)
  useEffect(() => {
    getMovies(`/discover/movie?page=1`)
      .then((data) => {
        // console.log(data)
        setMovies(data.results)
        setPageInfo((prevPageInfo) => {
          return { ...prevPageInfo, totalPages: data.total_pages }
        })
      })
      .finally(() => setLoading(false))
  }, [])
  useEffect(() => {
    if (pageInfo.page !== 1 || search !== null) {
      getMovies(
        search
          ? `/search/movie?query=${search}&page=${pageInfo.page}`
          : `/discover/movie?page=${pageInfo.page}`
      )
        .then((data) => {
          setMovies((prevMovies) => prevMovies.concat(data.results))
          setPageInfo((prevPageInfo) => {
            return { ...prevPageInfo, totalPages: data.total_pages }
          })
        })
        .finally(() => setLoadingMoreMovies(false))
    }
  }, [pageInfo.page, search])

  const handlePage = () => {
    setLoadingMoreMovies(true)
    setPageInfo((prevPageInfo) => {
      return { ...prevPageInfo, page: prevPageInfo.page + 1 }
    })
  }

  const handleChangeSearch = (e) => setSearchInputValue(e.target.value)

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    setMovies([])
    setPageInfo((prevPageInfo) => {
      return {
        ...prevPageInfo,
        page: 1,
      }
    })
    navigate(`/?search=${searchInputValue}`)
  }
  console.log(search)
  if (loading) return <span>Loading movies... 😎</span>
  return (
    <main className={container}>
      <NewMoviesSlider />
      <section className={mainSectionContainer}>
        <Navbar
          onChangeSearch={handleChangeSearch}
          onSubmitSearch={handleSubmitSearch}
          search={searchInputValue}
        />
        <div className={cardContainer} key={search}>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
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