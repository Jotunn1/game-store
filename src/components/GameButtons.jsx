import AddToCartBtn from "./primitives/AddToCartBtn";

export const GameButtons = ({ price, gameId }) => {
    return (
        <div className="game-buttons">
            <h6>$ {price}</h6>
            <AddToCartBtn gameId={gameId} />
        </div>
    );
};
