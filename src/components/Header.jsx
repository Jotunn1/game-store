import { PrGhostBtn } from "./primitives/PrGhostBtn"

export const Header = () => {
    return (
        <header>
            <div className="left-side">
                <PrGhostBtn icon={'logo'} btnText={'game store'} />
                <PrGhostBtn icon={'store'} btnText={'browse store'} />
            </div>
            <div className="right-side">
                <PrGhostBtn icon={'githublogo'} btnText={'@Jotunn1'} />
                <PrGhostBtn icon={'browse'} btnText={'cart: 0 $'} />
            </div>
        </header>
    )
}
