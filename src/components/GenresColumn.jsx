import { PrGenreBtn } from "./primitives/PrGenreBtn";
//icons
import { ReactComponent as ActionLogo } from '../assets/images/genres/action.svg';
import { ReactComponent as StrategyLogo } from '../assets/images/genres/strategy.svg';
import { ReactComponent as RPGLogo } from '../assets/images/genres/RPG.svg';
import { ReactComponent as ShooterLogo } from '../assets/images/genres/shooter.svg';
import { ReactComponent as SportLogo } from '../assets/images/genres/sports.svg';
import { ReactComponent as PuzzleLogo } from '../assets/images/genres/puzzle.svg';
import { ReactComponent as RacingLogo } from '../assets/images/genres/racing.svg';
import { ReactComponent as AdventureLogo } from '../assets/images/genres/adventure.svg';

const GenresColumn = ({ setSelectedGenre }) => {

  const genresList = [{ name: 'action', icon: <ActionLogo /> },
  { name: 'strategy', icon: <StrategyLogo /> },
  { name: 'adventure', icon: <AdventureLogo /> },
  { name: 'RPG', icon: <RPGLogo /> },
  { name: 'shooter', icon: <ShooterLogo /> },
  { name: 'sport', icon: <SportLogo /> },
  { name: 'puzzle', icon: <PuzzleLogo /> },
  { name: 'racing', icon: <RacingLogo /> }];

  return (
    <div className="genres-col">
      <h3>Genres</h3>
      <ul>
        {genresList.map((el, index) => <PrGenreBtn genreName={el.name} key={index} setSelectedGenre={() => setSelectedGenre(el.name)} >
          {el.icon}
        </PrGenreBtn>)}
      </ul>
    </div>
  )
}

export default GenresColumn;