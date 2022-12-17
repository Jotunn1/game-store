import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/actions";
import { ReactComponent as PlusIcon } from "../../assets/images/plus.svg";
import { ReactComponent as AddedIcon } from "../../assets/images/added.svg";
const AddToCartBtn = ({ gameId }) => {
    const dispatch = useDispatch();
    const [isInCart, setIsInCart] = useState(false);
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        setIsInCart(cart.some((el) => el.id === gameId));
    }, [cart]);

    return (
        <button
            className={"button cart-btn" + (isInCart ? " added" : "")}
            onClick={() => dispatch(actions.addToCart(gameId))}
        >
            {isInCart ? (
                <>
                    <h4>Added to Cart</h4>
                    <AddedIcon />
                </>
            ) : (
                <>
                    <h4>Add to cart</h4>
                    <PlusIcon />
                </>
            )}
        </button>
    );
};

export default AddToCartBtn;
