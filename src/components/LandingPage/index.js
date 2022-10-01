import { useState, useEffect } from "react"
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
  const [loading, setLoading] = useState(true)
  const [loadingMoreMovies, setLoadingMoreMovies] = useState(false)
  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.results)
        setPageInfo((prevPageInfo) => {
          return { ...prevPageInfo, totalPages: data.total_pages }
        })
      })
      .finally(() => setLoading(false))
  }, [])
  useEffect(() => {
    if (pageInfo.page !== 1) {
      getMovies(pageInfo.page)
        .then((data) => {
          setMovies((prevMovies) => prevMovies.concat(data.results))
        })
        .finally(() => setLoadingMoreMovies(false))
    }
  }, [pageInfo])

  const handlePage = () => {
    setLoadingMoreMovies(true)
    setPageInfo((prevPageInfo) => {
      return { ...prevPageInfo, page: prevPageInfo.page + 1 }
    })
  }
  if (loading) return <span>Loading movies... 😎</span>
  return (
    <main className={container}>
      <NewMoviesSlider />
      <section className={mainSectionContainer}>
        <Navbar />
        <div className={cardContainer}>
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
