import { PrGhostBtn } from "./primitives/PrGhostBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isBrowsePage, setIsBrowsePage] = useState(location.pathname === '/browse')

    const navigateTo = (path) => navigate(path)
    console.log(isBrowsePage)
    return (
        <header className={isBrowsePage ? 'bg' : ''}>
            <div className="left-side">
                <PrGhostBtn icon={'logo'} btnText={'game store'} navigateTo={() => navigateTo('/')} />
                {isBrowsePage 
                ? '' 
                : <PrGhostBtn icon={'store'} btnText={'browse store'} navigateTo={() => navigateTo('browse')} />
                }

            </div>
            <div className="right-side">
                <PrGhostBtn icon={'githublogo'} btnText={'Jotunn1'} />
                <PrGhostBtn icon={'browse'} btnText={'cart: 0 $'} />
            </div>
        </header>
    )
}
