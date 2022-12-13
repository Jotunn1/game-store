import PrButtonsRow from "../ButtonsRow"
import PrMainTitle from "../primitives/PrMainTitle"

export const HomePage = () => {
    return (
        <div className="home-page">
            <div>
                <PrMainTitle />
                <PrButtonsRow />
            </div>
            <div></div>
        </div>
    )
}