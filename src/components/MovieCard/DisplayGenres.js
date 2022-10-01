import { getGenreName } from "../../utils/getGenreName"

export default function DisplayGenres({
  genres,
  style = {},
  separator = ", ",
}) {
  const getGenreParagraph = () => {
    return genres.map((id, i) => {
      if (i + 1 === genres.length) return getGenreName(id)
      else return getGenreName(id) + separator
    })
  }
  return <p className={style}>{getGenreParagraph()}</p>
}
