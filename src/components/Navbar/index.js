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
  menuButton,
  showMenu,
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
  const handleToggle = () => {
    const menu = document.querySelector('[name="menuNav"]')
    menu.classList.toggle(showMenu)
  }
  return (
    <header className={navbar}>
      <button className={menuButton} onClick={handleToggle}>
        <span>
          <FontAwesomeIcon icon={faBars} /> <span>Menú and Favorites</span>
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
        <button>
          <FontAwesomeIcon icon={faStar} /> 0
        </button>
      </nav>
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
          <input type="text" value={search} onChange={onChangeSearch} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={searchIcon} />
        </form>
      </section>
    </header>
  )
}
