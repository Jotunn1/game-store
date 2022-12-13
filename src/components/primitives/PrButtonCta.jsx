import { PrIcon } from "./PrIcon";

const PrButtonCta = ({ icon, btnText, link }) => {
    return (
        <button className="button btn-cta">
            {link && <a target='_blank' href={link}></a>}
            <PrIcon iconName={icon} />
            <h4>{btnText}</h4>
        </button>
    )
}

export default PrButtonCta