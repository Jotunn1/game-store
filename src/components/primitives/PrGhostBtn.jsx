import { PrIcon } from "./PrIcon";

export const PrGhostBtn = ({ icon, btnText, navigateTo }) => {
    return (
        <button className="button ghost-btn" onClick={navigateTo}>
            <PrIcon iconName={icon} />
            <h3>{btnText}</h3>
        </button>
    );
};
