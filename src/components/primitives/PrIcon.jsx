import svgMap from '../../assets/svg-map.svg';

export const PrIcon = ({ iconName }) => {
    return (
        <svg className={`icon-map ${iconName}`}>
            <use href={`${svgMap}#${iconName}`}>
            </use>
        </svg>
    )
}
