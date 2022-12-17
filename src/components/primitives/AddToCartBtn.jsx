import { ReactComponent as PlusLogo } from '../../assets/images/plus.svg';
const AddToCartBtn = ({ addToCart }) => {
    return (
        <button className="button cart-btn" onClick={addToCart}>
            <h4>Add to cart</h4>
            <PlusLogo />
        </button>
    )
}

export default AddToCartBtn;