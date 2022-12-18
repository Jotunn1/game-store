import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CartSidePanel } from "../CartSidePanel";
import { PrGhostBtn } from "./PrGhostBtn";

const CartButton = () => {
    const cart = useSelector((state) => state.cart);
    const cartTotal = useMemo(() => {
        return cart.reduce((acc, el) => acc + Number(el.price), 0);
    }, [cart]);

    return (
        <>
            <PrGhostBtn
                icon={"cart"}
                btnText={`cart: ${cartTotal.toFixed(2)} $`}
            />
        </>
    );
};

export default CartButton;
