import { GameButtons } from "./GameButtons"

export const GameInfo = ({ game }) => {
    return (
        <div className="game-info">
            <h3>About</h3>
            <p>
                {game.desc}
            </p>

            <GameButtons price={game.price} />
        </div>
    )
}
