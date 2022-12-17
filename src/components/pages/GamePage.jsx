import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import games from "../../data/gamesData";
import { GameInfo } from "../GameInfo";
import ImageSlider from "../ImageSlider";
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';

const GamePage = () => {
    const gameId = useParams();
    const selectedGame = games.find(game => game.id.toString() === gameId.gameId);

    console.log(selectedGame)

    return (
        <div className="game-page">
            <div className="first-row">
                <NavLink to={'/browse'}>
                    <button className="button ghost-btn">
                        <ArrowIcon />
                        <h3>back to store</h3>
                    </button>
                </NavLink>
                <h1>{selectedGame.name}</h1>
            </div>
            <div className="game-content">
                <ImageSlider imagesArray={selectedGame.footage} />
                <GameInfo game={selectedGame} />
            </div>
        </div>
    )
}

export default GamePage;