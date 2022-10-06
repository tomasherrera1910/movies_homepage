import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getMovies } from "../utils/getMovies"

export function useMovies() {
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
  return {
    movies,
    moviesVotesAverage,
    pageInfo,
    search,
    searchInputValue,
    sliderValue,
    viewGrid,
    setViewGrid,
    loading,
    loadingMoreMovies,
    handlePage,
    handleChangeSearch,
    handleSubmitSearch,
    handleChangeSlider,
  }
}
