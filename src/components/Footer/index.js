import {
  faFacebook,
  faImdb,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./footer.module.css"
const { footer, logoContainer, socialsContainer, spamContainer } = styles
export default function Footer() {
  return (
    <footer className={footer}>
      <div className={logoContainer}>
        <FontAwesomeIcon icon={faImdb} />
      </div>
      <div className={socialsContainer}>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className={spamContainer}>
        <span>1990-2019 IMDB.COM, INC.</span>
      </div>
    </footer>
  )
}
