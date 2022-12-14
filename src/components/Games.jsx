import { useEffect, useState } from "react";
import games from "../data/gamesData";
import GameCard from "./primitives/GameCard";

const Games = ({ selectedGenre }) => {
    const [filteredGames, setFilteredGames] = useState(games);

    useEffect(() => {
        if (selectedGenre !== 'none') {
            const filteredArray = games.filter(game => game.genre === selectedGenre);
            setFilteredGames(filteredArray)
        }

    }, [selectedGenre])


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