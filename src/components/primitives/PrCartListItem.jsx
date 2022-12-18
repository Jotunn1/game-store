import DeleteFromCart from "./DeleteFromCart";

const PrCartListItem = ({ gameName, gamePrice, gameId }) => {
    return (
        <div className="cart-item">
            <div>
                <h6>{gameName}</h6>
                <p>$ {gamePrice}</p>
            </div>
            <DeleteFromCart gameId={gameId} />
        </div>
    );
};

export default PrCartListItem;
