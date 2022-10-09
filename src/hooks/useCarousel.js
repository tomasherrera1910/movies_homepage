import { useEffect, useState } from "react"
import { getUpcomingMovies } from "../utils/getMovies"

export function useCarousel() {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    getUpcomingMovies("1").then(({ results }) =>
      setUpcomingMovies(
        results.slice(0, 5).map((movie) => ({
          ...movie,
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }))
      )
    )
  }, [])

  return { upcomingMovies }
}
