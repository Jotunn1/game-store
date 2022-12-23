import AddToCartBtn from "./primitives/AddToCartBtn";

export const GameButtons = ({ price, gameId }) => {
    return (
        <div className="game-buttons">
            <h6>$ {price}</h6>
            {price === "??.??" ? (
                <>
                    <button className="button cart-btn">
                        <h4>Not Avaliable</h4>
                    </button>
                </>
            ) : (
                <AddToCartBtn gameId={gameId} />
            )}
        </div>
    );
};
