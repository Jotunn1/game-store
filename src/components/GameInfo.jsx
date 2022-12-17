import { GameButtons } from "./GameButtons"
import GameColapseInfo from "./GameColapseInfo"

export const GameInfo = ({ game }) => {
    return (
        <div className="game-info">
            <div className="about">
                <h3>About</h3>
                <p>
                    {game.desc}
                </p>
            </div>

            <GameColapseInfo game={game} />
            <GameButtons price={game.price} />
        </div>
    )
}
