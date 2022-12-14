import AddToCartBtn from "./AddToCartBtn"

const GameCard = ({ game }) => {

    const addToCart = (gameId) => {
        console.log(gameId)
    }
    
    return (
        <div className="game-card">
            <div className="image-wrapper">
                <img src={game.cover} alt={game.name} />
            </div>
            <div className="game-price">
                <AddToCartBtn addToCart={() => addToCart(game.name)} />
                ${game.price}
            </div>
            <h2>
                {game.name}
            </h2>
        </div>
    )
}

export default GameCard