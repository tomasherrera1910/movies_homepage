import { useState } from "react"
export function useFavs() {
  const getLocalStorage = () => {
    const localStorageMovies =
      JSON.parse(window.localStorage.getItem("favs")) || []
    return localStorageMovies
  }
  const addLocalStorage = (movie) => {
    let arrayWithNewFav = []
    const promise = new Promise((resolve, reject) => {
      resolve((arrayWithNewFav = getLocalStorage().concat(movie)))
    })
    promise.then(() => {
      setFavs(arrayWithNewFav)
      window.localStorage.setItem("favs", JSON.stringify(arrayWithNewFav))
    })
  }
  const removeLocalStorage = (movieId) => {
    const ArrayFilter = getLocalStorage().filter(
      (favMovie) => favMovie.id !== movieId
    )
    setFavs(ArrayFilter)
    window.localStorage.setItem("favs", JSON.stringify(ArrayFilter))
  }
  const isFav = (movieId) => {
    return getLocalStorage().find((favMovie) => favMovie.id === movieId)
  }
  const [favs, setFavs] = useState(() => getLocalStorage())

  return { favs, addLocalStorage, removeLocalStorage, isFav }
}
