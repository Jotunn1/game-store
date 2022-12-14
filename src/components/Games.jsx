import { useEffect, useState } from "react";
import games from "../data/gamesData";
import { FilterControls } from "./FilterControls";
import { GridControls } from "./GridControls";
import GameCard from "./primitives/GameCard";

const Games = ({ selectedGenre, setSelectedGenre }) => {
    const [filteredGames, setFilteredGames] = useState(games);
    const [gamesLayout, setGamesLayout] = useState('grid');

    useEffect(() => {
        if (selectedGenre !== 'none') {
            const filteredArray = games.filter(game => game.genre === selectedGenre);
            setFilteredGames(filteredArray)
        }
        else setFilteredGames(games)
    }, [selectedGenre])

    return (
        <div className={"games " + gamesLayout}>
            <h2>Games</h2>
            <div className="controls-row">
                <FilterControls selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
                <GridControls setGamesLayout={setGamesLayout} />
            </div>
            <ul>
                {filteredGames.map(game => <GameCard game={game} key={game.id} />)}
            </ul>
        </div>

    )
}

export default Games