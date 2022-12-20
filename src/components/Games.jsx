import { useState } from "react";
import { useSelector } from "react-redux";
import { FilterControls } from "./FilterControls";
import { GridControls } from "./GridControls";
import GameCard from "./primitives/GameCard";

const Games = () => {
    const [gamesLayout, setGamesLayout] = useState("grid");
    const gamesList = useSelector((state) => state.gamesList);
    const searchRequest = useSelector((state) => state.searchRequest);

    return (
        <div className={"games " + gamesLayout}>
            <h2>Games</h2>
            <div className="controls-row">
                <FilterControls />
                <GridControls setGamesLayout={setGamesLayout} />
            </div>

            {gamesList.length > 0 ? (
                <ul>
                    {gamesList.map((game) => (
                        <GameCard game={game} key={game.id} />
                    ))}
                </ul>
            ) : (
                <div className="search-placeholder">
                    <h5>
                        There is no result for <span>{searchRequest}</span>{" "}
                        search
                    </h5>
                </div>
            )}
        </div>
    );
};

export default Games;
