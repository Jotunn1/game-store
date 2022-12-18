import { useState } from "react";
import { useSelector } from "react-redux";
import PrCartListItem from "./primitives/PrCartListItem";

export const CartSidePanel = () => {
    const [isOpen, setIsOpen] = useState(true);
    const cart = useSelector((state) => state.cart);

    const closeCartPanel = () => setIsOpen(false);
    return (
        <div className={"cart-panel " + (isOpen ? "active" : "closed")}>
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
                            <h2>{cart.length} Games</h2>
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

            <button className="button close-panel" onClick={closeCartPanel}>
                Close Panel
            </button>
        </div>
    );
};
