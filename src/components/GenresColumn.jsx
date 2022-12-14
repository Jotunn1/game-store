import { PrGenreBtn } from "./primitives/PrGenreBtn";
//icons


const GenresColumn = () => {
  const genresList = ['action', 'strategy', 'adventure', 'RPG', 'shooter', 'sport', 'puzzle', 'racing'];
  return (
    <div className="genres-col">
      <h3>Genres</h3>
      <ul>
        {genresList.map(el=> <PrGenreBtn genreName={el} />)}
      </ul>
    </div>
  )
}

export default GenresColumn;