import { useNavigate } from "react-router";
import AddToCartBtn from "./AddToCartBtn";

const GameCard = ({ game }) => {
    const navigate = useNavigate();

    const openGamePage = (gameId) => navigate(`/games/${gameId}`);

    return (
        <div className="game-card" onClick={() => openGamePage(game.id)}>
            <div className="image-wrapper">
                <img src={game.cover} alt={game.name} />
            </div>
            <div className="grid">
                <div className="game-price">
                    <AddToCartBtn gameId={game.id} />
                    <p>${game.price}</p>
                </div>
                <h2>{game.name}</h2>
            </div>
            <div className="column">
                <h2>{game.name}</h2>
                <ul className="info">
                    <li>
                        Developer : <span>{game.developers}</span>
                    </li>
                    <li>
                        Genre : <span className="genre">{game.genre}</span>
                    </li>
                    <li>
                        Platforms : <span>{game.platforms}</span>
                    </li>
                </ul>
                <div className="game-price">
                    <AddToCartBtn gameId={game.id} />
                    <p>${game.price}</p>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
