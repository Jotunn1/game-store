import PrButtonsRow from "../ButtonsRow"
import NavigationList from "../NavigationList"
import PrMainTitle from "../primitives/PrMainTitle"

export const HomePage = () => {
    return (
        <div className="home-page">
            <div>
                <PrMainTitle />
                <PrButtonsRow />
            </div>
            <div>
                <NavigationList />
            </div>
        </div>
    )
}
