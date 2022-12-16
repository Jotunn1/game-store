import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn"

const GameCard = ({ game }) => {

    const navigate = useNavigate();

    const openGamePage = (gameId) => navigate(`games/${gameId}`)

    const addToCart = (gameId) => {
        console.log(gameId)
    }

    return (
        // <Link to={`games/${game.id}`}>
        <div className="game-card" onClick={() => openGamePage(game.id)} >
            <div className="image-wrapper">
                <img src={game.cover} alt={game.name} />
            </div>
            <div className="game-price">
                <AddToCartBtn addToCart={() => addToCart(game.id)} />
                ${game.price}
            </div>
            <h2>
                {game.name}
            </h2>
        </div>
        // </Link>
    )
}

export default GameCard