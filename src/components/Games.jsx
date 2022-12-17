import { useState } from "react";
import { useSelector } from "react-redux";
import { FilterControls } from "./FilterControls";
import { GridControls } from "./GridControls";
import GameCard from "./primitives/GameCard";

const Games = () => {
    const [gamesLayout, setGamesLayout] = useState("grid");
    const gamesList = useSelector((state) => state.gamesList);

    return (
        <div className={"games " + gamesLayout}>
            <h2>Games</h2>
            <div className="controls-row">
                <FilterControls />
                <GridControls setGamesLayout={setGamesLayout} />
            </div>
            <ul>
                {gamesList.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </ul>
        </div>
    );
};

export default Games;
