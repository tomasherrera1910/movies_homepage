import styles from "../components/Navbar/navbar.module.css"
const { buttonActive, showMenu, showFavs } = styles

export function useNavbar(setViewGrid) {
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
  const handleToggleMenu = () => {
    const menu = document.querySelector('[name="menuNav"]')
    menu.classList.toggle(showMenu)
  }
  const handleToggleFavs = () => {
    const favsMenu = document.querySelector('[name="menuFavs"]')
    favsMenu.classList.toggle(showFavs)
  }
  return { handleSlider, handleViewClick, handleToggleMenu, handleToggleFavs }
}
