import AddToCartBtn from "./primitives/AddToCartBtn"

export const GameButtons = ({ price }) => {
    return (
        <div className="game-buttons">
            <h6>$ {price}</h6>
            <div>heart</div>
            <AddToCartBtn />
        </div>
    )
}
