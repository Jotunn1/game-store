import { PrGhostBtn } from "./primitives/PrGhostBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect, useCallback, useRef } from "react";
import { SearchBar } from "./SearchBar";
import CartButton from "./primitives/CartButton";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [y, setY] = useState(window.scrollY);
    const scrollDirection = useRef("");

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                scrollDirection.current = "top";
            } else if (y < window.scrollY) {
                scrollDirection.current = "bottom";
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const navigateTo = (path) => navigate(path);
    const isHomePage = useMemo(() => location.pathname === "/", [location]);

    return (
        <header
            className={`${isHomePage ? "" : "bg"} scroll-${
                scrollDirection.current
            }`}
        >
            <div className="left-side">
                <PrGhostBtn
                    icon={"logo"}
                    btnText={"game store"}
                    navigateTo={() => navigateTo("/")}
                />
                {isHomePage ? (
                    <PrGhostBtn
                        icon={"store"}
                        btnText={"browse store"}
                        navigateTo={() => navigateTo("browse")}
                    />
                ) : (
                    <SearchBar />
                )}
            </div>
            <div className="right-side">
                <CartButton />
            </div>
        </header>
    );
};
