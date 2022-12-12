import { PrIcon } from "./PrIcon"

export const PrGhostBtn = ({ icon, btnText }) => {
    return (
        <button className="button ghost-btn">
            <PrIcon iconName={icon} />
            <h4>{btnText}</h4>
        </button>
    )
}
