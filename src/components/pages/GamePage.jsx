import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import games from "../../data/gamesData";
import { GameInfo } from "../GameInfo";
import { PrGhostBtn } from "../primitives/PrGhostBtn";

const GamePage = () => {
    const gameId = useParams();
    const selectedGame = games.find(game => game.id.toString() === gameId.gameId);
    console.log(selectedGame)

    return (
        <div className="game-page">
            <div className="first-row">
                <NavLink to={'/browse'}>
                    <PrGhostBtn icon={'arrow'} btnText='back to store' />
                </NavLink>
                <h1>{selectedGame.name}</h1>
            </div>
            <div className="game-content">
                <div>
                    Slider
                </div>
                <GameInfo game={selectedGame} />
            </div>
        </div>
    )
}

export default GamePage;