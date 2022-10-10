import { useNavbar } from "../../hooks/useNavbar"
import FavCard from "./FavCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMagnifyingGlass,
  faStar,
  faBars,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./navbar.module.css"
const {
  navbar,
  navMenuSection,
  inputsSection,
  active,
  slider,
  textInputBox,
  searchIcon,
  buttonActive,
  navAndFavContainer,
  menuButton,
  favMenu,
  favButton,
} = styles
export default function Navbar({
  setSearch,
  onSubmitSearch,
  search,
  onChangeSlider,
  sliderValue,
  setViewGrid,
  favs,
  handleDeleteFav,
}) {
  const { handleToggleMenu, handleToggleFavs, handleSlider, handleViewClick } =
    useNavbar(setViewGrid)
  return (
    <header className={navbar}>
      <div className={navAndFavContainer}>
        <button className={menuButton} onClick={handleToggleMenu}>
          <span>
            <FontAwesomeIcon icon={faBars} /> <span>Menú</span>
          </span>
        </button>
        <nav className={navMenuSection} name="menuNav">
          <a href="/" className={active}>
            TRENDING
          </a>
          <a href="/">IN THEATERS</a>
          <a href="/">COMING SOON</a>
          <a href="/">CHARTS</a>
          <a href="/">TV SERIES</a>
          <a href="/">TRAILERS</a>
        </nav>
        <button
          onClick={handleToggleFavs}
          name="favButton"
          className={favButton}
        >
          <FontAwesomeIcon icon={faStar} /> {favs.length || 0}
        </button>
      </div>
      <section className={favMenu} name="menuFavs">
        {favs.map((favMovie) => (
          <FavCard
            key={favMovie.id}
            movie={favMovie}
            handleDeleteFav={handleDeleteFav}
          />
        ))}
      </section>
      <section className={inputsSection}>
        <div>
          <button
            name="simple-view"
            onClick={() => handleViewClick("remove", "add", false)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button
            name="grid-view"
            onClick={() => handleViewClick("add", "remove", true)}
            className={buttonActive}
          >
            <FontAwesomeIcon icon={faTableCells} />
          </button>
        </div>
        <label>
          IMDb Rating: {sliderValue}
          <input
            className={slider}
            id="slider"
            type="range"
            max="10"
            min="0"
            step="0.5"
            value={sliderValue}
            onChange={onChangeSlider}
            onInput={handleSlider}
          />
        </label>
        <form className={textInputBox} onSubmit={onSubmitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={searchIcon} />
        </form>
      </section>
    </header>
  )
}
