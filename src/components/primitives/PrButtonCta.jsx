import { Link } from "react-router-dom";
import { PrIcon } from "./PrIcon";

const PrButtonCta = ({ icon, btnText, outerLink, innerLink }) => {
    return (
        <button className="button btn-cta">
            {outerLink ? (
                <a target="_blank" href={outerLink}></a>
            ) : (
                <Link to={innerLink} />
            )}
            <PrIcon iconName={icon} />
            <h4>{btnText}</h4>
        </button>
    );
};

export default PrButtonCta;
