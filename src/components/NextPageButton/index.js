import { faArrowDown, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./nextButton.module.css"
const { button, span } = styles
export default function NextPageButton({ pageInfo, handlePage, loading }) {
  return (
    <>
      {pageInfo.page < pageInfo.totalPages &&
        (loading ? (
          <span className={span}>
            <FontAwesomeIcon icon={faSpinner} spin />
          </span>
        ) : (
          <button className={button} onClick={handlePage}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        ))}
    </>
  )
}
