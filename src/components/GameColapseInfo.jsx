import { useState } from "react";

const GameColapseInfo = ({ game }) => {
    const [isColapsed, setIsColapsed] = useState(false);
    return (
        <div className="collapsed-info">
            <div className="blurred-row" onClick={() => setIsColapsed(!isColapsed)}>
                <p>
                    {isColapsed ? "Show more" : "Hide"}
                </p>
                <img className={isColapsed ? 'rotate' : ''} src={require('../assets/images/arrow-down.png')} alt="arrow-down" />
            </div>
            <ul>
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