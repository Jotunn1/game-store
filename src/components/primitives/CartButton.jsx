import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { CartSidePanel } from "../CartSidePanel";
import { PrGhostBtn } from "./PrGhostBtn";

const CartButton = () => {
    const [isCartPanelActive, setIsCartPanelActive] = useState(false);
    const cart = useSelector((state) => state.cart);
    const cartTotal = useMemo(() => {
        return cart.reduce((acc, el) => acc + Number(el.price), 0);
    }, [cart]);
    useEffect(() => {
        if (isCartPanelActive) {
            const body = document.querySelector("body");
            if (body.classList.contains("block-scroll"))
                body.classList.remove("block-scroll");
            else body.classList.add("block-scroll");
        }
    }, [isCartPanelActive]);

    return (
        <>
            <div onClick={() => setIsCartPanelActive(true)}>
                <PrGhostBtn
                    icon={"cart"}
                    btnText={`cart: ${cartTotal.toFixed(2)} $`}
                />
            </div>
            <CartSidePanel
                isCartPanelActive={isCartPanelActive}
                setIsCartPanelActive={setIsCartPanelActive}
                total={cartTotal}
            />
        </>
    );
};

export default CartButton;
