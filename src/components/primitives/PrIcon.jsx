export const PrIcon = ({ iconName }) => {
    const currentIcon = require(`../../assets/images/${iconName}.svg`);
    return (
        <img
            className={`icon ${iconName}`}
            src={currentIcon}
            alt={iconName + " icon"}
        />
    );
};
