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
} = styles
export default function Navbar({
  onChangeSearch,
  onSubmitSearch,
  search,
  onChangeSlider,
  sliderValue,
  setViewGrid,
}) {
  const handleSlider = () => {
    const slider = document.getElementById("slider")
    const value = slider.value * 10
    const color = `linear-gradient(90deg, #ffd700 ${value}%, #ddd ${value}%)`
    slider.style.background = color
  }
  const handleViewClick = (gridValue, simpleValue, booleanValue) => {
    const gridButton = document.querySelector('[name="grid-view"]')
    const simpleButton = document.querySelector('[name="simple-view"]')
    gridButton.classList[gridValue](buttonActive)
    simpleButton.classList[simpleValue](buttonActive)
    setViewGrid(booleanValue)
  }

  return (
    <header className={navbar}>
      <nav className={navMenuSection}>
        <a href="/" className={active}>
          IN THEATERS
        </a>
        <a href="/">COMING SOON</a>
        <a href="/">CHARTS</a>
        <a href="/">TV SERIES</a>
        <a href="/">TRAILERS</a>
        <a href="/">MORE</a>
        <button>
          <FontAwesomeIcon icon={faStar} /> 179
        </button>
      </nav>
      <section className={inputsSection}>
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
          <input type="text" value={search} onChange={onChangeSearch} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={searchIcon} />
        </form>
      </section>
    </header>
  )
}
