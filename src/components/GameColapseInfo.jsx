import { useRef, useState } from "react";

const GameColapseInfo = ({ game }) => {
    const [isColapsed, setIsColapsed] = useState(true);
    const collapsedList = useRef(null);

    return (
        <div className={`collapsed-info ${isColapsed ? 'hide' : 'active'} `}>
            <div className="blurred-row" onClick={() => setIsColapsed(!isColapsed)}>
                <p>
                    {isColapsed ? "Show more" : "Hide"}
                </p>
                <img className={isColapsed ? '' : 'rotate'} src={require('../assets/images/arrow-down.png')} alt="arrow-down" />
            </div>
            <ul ref={collapsedList}
            // style={{ "--list-height": collapseListHeight }}
            >
                <a href={game.link}>
                    {game.surname} Website
                </a>
                <li>
                    Released: {game.release}
                </li>
                <li>
                    Platforms: {game.platforms}
                </li>
                <li>
                    Main Genre: {game.genre}
                </li>
                <li>
                    Developer: {game.developers}
                </li>
                <li>
                    Publisher: {game.publishers}
                </li>
            </ul>
        </div>
    )
}

export default GameColapseInfo