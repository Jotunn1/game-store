import { useDispatch, useSelector } from "react-redux";
import PrCartListItem from "./primitives/PrCartListItem";
import { actions } from "../store/actions";
import { useEffect } from "react";

export const CartSidePanel = ({
    isCartPanelActive,
    setIsCartPanelActive,
    total,
}) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className={"cart-bg " + (isCartPanelActive ? "active" : "closed")}>
            <div
                className="outside-cart"
                onClick={() => setIsCartPanelActive(false)}
            ></div>
            <div className="cart-panel">
                <div>
                    {cart.length > 0 ? (
                        cart.length === 1 ? (
                            <>
                                <h2>{cart.length} Game</h2>
                                <ul>
                                    {cart.map((el) => (
                                        <PrCartListItem
                                            gameName={el.name}
                                            gamePrice={el.price}
                                            gameId={el.id}
                                            key={el.id}
                                        />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <div className="title">
                                    <h2>{cart.length} Games</h2>
                                    <button
                                        className="button clear-cart"
                                        onClick={() =>
                                            dispatch(actions.clearCart())
                                        }
                                    >
                                        Clear
                                    </button>
                                </div>

                                <ul>
                                    {cart.map((el) => (
                                        <PrCartListItem
                                            gameName={el.name}
                                            gamePrice={el.price}
                                            gameId={el.id}
                                            key={el.id}
                                        />
                                    ))}
                                </ul>
                            </>
                        )
                    ) : (
                        <h2>You have no games in cart</h2>
                    )}
                </div>
                <div className="total">
                    <h5>Total</h5>
                    <p>$ {total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};
