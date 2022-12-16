import { useParams } from "react-router";
import { Link } from "react-router-dom";
import games from "../../data/gamesData";
import { PrGhostBtn } from "../primitives/PrGhostBtn";

const GamePage = () => {
    const gameId = useParams();
    const selectedGame = games.find(game => game.id == gameId.gameId);

    console.log(selectedGame)
    console.log(gameId, 'gameID')
    return (
        <div className="game-page">Game page
            <div className="first-row">
                <Link to={'/browse'}>
                    <PrGhostBtn icon={'arrow'} btnText='back to store' />
                </Link>

                <h1>{selectedGame.name}</h1>
            </div>
        </div>
    )
}

export default GamePage;