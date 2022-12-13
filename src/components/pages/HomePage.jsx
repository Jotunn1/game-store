import PrButtonsRow from "../ButtonsRow"
import NavigationList from "../NavigationList"
import PrMainTitle from "../primitives/PrMainTitle";
import PrBackgroundVideo from '../primitives/PrBackgroundVideo'

export const HomePage = () => {
    return (
        <>
            <PrBackgroundVideo />
            <div className="home-page">
                <div>
                    <PrMainTitle />
                    <PrButtonsRow />
                </div>
                <div>
                    <NavigationList />
                </div>
            </div>
        </>

    )
}
