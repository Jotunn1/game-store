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
            <div className="game-price">
                <AddToCartBtn gameId={game.id} />
                <p>${game.price}</p>
            </div>
            <h2>{game.name}</h2>
        </div>
    );
};

export default GameCard;
