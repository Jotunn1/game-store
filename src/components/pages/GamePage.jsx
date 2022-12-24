import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { GameInfo } from "../GameInfo";
import ImageSlider from "../ImageSlider";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";
import { useSelector } from "react-redux";

const GamePage = () => {
    const gameId = useParams();
    const games = useSelector((state) => state.gamesList);
    const selectedGame = games.find(
        (game) => game.id.toString() === gameId.gameId
    );

    return (
        <div className="game-page">
            <div className="first-row">
                <NavLink to={"/browse"}>
                    <button className="button ghost-btn">
                        <ArrowIcon />
                        <h3>back to store</h3>
                    </button>
                </NavLink>
                <h1>{selectedGame.name}</h1>
            </div>
            <div className="game-content">
                <GameInfo game={selectedGame} />
                <ImageSlider imagesArray={selectedGame.footage} />
            </div>
        </div>
    );
};

export default GamePage;
