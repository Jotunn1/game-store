import AddToCartBtn from "./primitives/AddToCartBtn"

export const GameButtons = ({ price, gameId }) => {
    return (
        <div className="game-buttons">
            <h6>$ {price}</h6>
            <div>heart</div>
            <AddToCartBtn gameId={gameId} />
        </div>
    )
}
