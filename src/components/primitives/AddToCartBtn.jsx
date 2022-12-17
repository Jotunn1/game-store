import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { ReactComponent as PlusLogo } from "../../assets/images/plus.svg";
const AddToCartBtn = ({ gameId }) => {
    const dispatch = useDispatch();

    return (
        <button
            className="button cart-btn"
            onClick={() => dispatch(actions.addToCart(gameId))}
        >
            <h4>Add to cart</h4>
            <PlusLogo />
        </button>
    );
};

export default AddToCartBtn;
