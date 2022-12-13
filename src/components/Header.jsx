import { PrGhostBtn } from "./primitives/PrGhostBtn";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => navigate(path)
    
    return (
        <header>
            <div className="left-side">
                <PrGhostBtn icon={'logo'} btnText={'game store'} navigateTo={() => navigateTo('home')} />
                <PrGhostBtn icon={'store'} btnText={'browse store'} navigateTo={() => navigateTo('browse')} />
            </div>
            <div className="right-side">
                <PrGhostBtn icon={'githublogo'} btnText={'Jotunn1'} />
                <PrGhostBtn icon={'browse'} btnText={'cart: 0 $'} />
            </div>
        </header>
    )
}
