import { PrGhostBtn } from "./primitives/PrGhostBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { SearchBar } from "./SearchBar";
import CartButton from "./primitives/CartButton";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => navigate(path);
    const isBrowsePage = useMemo(
        () => location.pathname === "/browse",
        [location]
    );

    return (
        <header className={isBrowsePage ? "bg" : ""}>
            <div className="left-side">
                <PrGhostBtn
                    icon={"logo"}
                    btnText={"game store"}
                    navigateTo={() => navigateTo("/")}
                />
                {isBrowsePage ? (
                    <SearchBar />
                ) : (
                    <PrGhostBtn
                        icon={"store"}
                        btnText={"browse store"}
                        navigateTo={() => navigateTo("browse")}
                    />
                )}
            </div>
            <div className="right-side">
                <CartButton />
                {/* <PrGhostBtn icon={"cart"} btnText={"cart: 0 $"} /> */}
            </div>
        </header>
    );
};
