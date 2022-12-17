import { ReactComponent as PlusLogo } from '../../assets/images/plus.svg';
const AddToCartBtn = ({ gameId }) => {
    const addToCart = (gameId) => {
        console.log(gameId)
    }
    return (
        <button className="button cart-btn" onClick={() => addToCart(gameId)}>
            <h4>Add to cart</h4>
            <PlusLogo />
        </button>
    )
}

export default AddToCartBtn;