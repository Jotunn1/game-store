import AddToCartBtn from "./AddToCartBtn";

const GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div className="image-wrapper">
                <img src={game.cover} alt={game.name} />
            </div>
            <div className="game-price">
                <AddToCartBtn gameId={game.id} />${game.price}
            </div>
            <h2>{game.name}</h2>
        </div>
    );
};

export default GameCard;
