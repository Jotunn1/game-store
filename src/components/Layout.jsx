import { Outlet } from "react-router-dom";
import { CartSidePanel } from "./CartSidePanel";
import { Header } from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
            <CartSidePanel />
            <Outlet />
        </>
    );
};

export default Layout;
