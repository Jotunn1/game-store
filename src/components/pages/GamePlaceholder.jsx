import { NavLink } from "react-router-dom";
import { GameInfo } from "../GameInfo";
import ImageSlider from "../ImageSlider";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";
import PlaceholderImage from "../../assets/images/placeholder-question-mark.png";

const GamePlaceholder = () => {
    const placeholderGame = {
        name: "Game not found",
        desc: "The game you tried to look for has not been found within our database. You can find a full list of our featured games in the browse section on our shop. Click the Store button in the top left corner to get back to the browse section. To avoid similar issues in the future, please do not try to access game pages by typing game names into the URL. The game might be called slightly different in our database, resulting in an error when trying to fetch the page data.",
        price: "??.??",
        surname: "No",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        release: "No release date found",
        platforms: "No platforms",
        genre: "No genre",
        developers: "No developers",
        publishers: "No publishers",
        sliderImages: [
            PlaceholderImage,
            PlaceholderImage,
            PlaceholderImage,
            PlaceholderImage,
        ],
    };
    
    return (
        <div className="game-page placeholder">
            <div className="first-row">
                <NavLink to={"/browse"}>
                    <button className="button ghost-btn">
                        <ArrowIcon />
                        <h3>back to store</h3>
                    </button>
                </NavLink>
                <h1>{placeholderGame.name}</h1>
            </div>
            <div className="game-content">
                <ImageSlider imagesArray={placeholderGame.sliderImages} />
                <GameInfo game={placeholderGame} />
            </div>
        </div>
    );
};

export default GamePlaceholder;
