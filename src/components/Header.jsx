import { PrGhostBtn } from "./primitives/PrGhostBtn"

export const Header = () => {
    return (
        <header>
            <div className="left-side">
                <PrGhostBtn icon={'game'} btnText={'game store'} />
                <PrGhostBtn icon={'browse'} btnText={'browse store'} />
            </div>
            <div className="right-side">
                <PrGhostBtn icon={'githublogo'} btnText={'@Jotunn1'} />
                <PrGhostBtn icon={'cart'} btnText={'cart: 0 $'} />
            </div>
        </header>
    )
}
