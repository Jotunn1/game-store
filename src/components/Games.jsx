import { useEffect, useState } from "react";
import games from "../data/gamesData";
import GameCard from "./primitives/GameCard";
const Games = ({ selectedGenre }) => {
    const [filteredGames, setFilteredGames] = useState(games)
    // if (selectedGenre !== 'none') {
    //     setFilteredGames(games.map(game => console.log(game.name)))
    // }
    console.log(selectedGenre, 'props')
    return (
        <div className="games">
            <h2>Games</h2>
            <ul>
                {filteredGames.map(game => <GameCard game={game} key={game.id} />)}
            </ul>
        </div>

    )
}

export default Games