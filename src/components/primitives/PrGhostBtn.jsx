import { PrIcon } from "./PrIcon"

export const PrGhostBtn = ({ icon, btnText }) => {
    return (
        <button className="button ghost-btn">
            <PrIcon iconName={icon} />
            <h3>{btnText}</h3>
        </button>
    )
}
