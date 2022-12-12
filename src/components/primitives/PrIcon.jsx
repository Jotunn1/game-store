// import svgMap from '../../assets/svg-map.svg';

export const PrIcon = ({ iconName }) => {
    const currentIcon = require(`../../assets/images/${iconName}.svg`);
    return (
        // <svg className="icon">
        //     <use href={`../../assets/images/${iconName}.svg`}></use>
        // </svg>
        <img className={`icon ${iconName}`} src={currentIcon} alt={iconName + ' icon'} />
    )
}
