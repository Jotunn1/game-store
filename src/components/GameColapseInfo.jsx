import { useEffect, useRef, useState } from "react";

const GameColapseInfo = ({ game }) => {
    const [isColapsed, setIsColapsed] = useState(true);
    const [colapsedListheight, setcolapsedListHeight] = useState(0);
    const collapsedList = useRef(null);

    const setListHeight = (el) => el.current.scrollHeight;

    useEffect(() => {
        setcolapsedListHeight(setListHeight(collapsedList));
        console.log(colapsedListheight, "colapsedListheight");
        // window.addEventListener("resize", () => {
        //     setcolapsedListHeight(setListHeight(collapsedList));
        //     console.log(colapsedListheight, "colapsedListheight from resize");
        // });
        // return () => window.addEventListener("resize", () => {});
    }, [colapsedListheight]);

    return (
        <div className={`collapsed-info ${isColapsed ? "hide" : "active"} `}>
            <div
                className="blurred-row"
                onClick={() => setIsColapsed(!isColapsed)}
            >
                <p>{isColapsed ? "Show more" : "Hide"}</p>
                <img
                    className={isColapsed ? "" : "rotate"}
                    src={require("../assets/images/arrow-down.png")}
                    alt="arrow-down"
                />
            </div>
            <ul
                ref={collapsedList}
                style={{ "--list-height": colapsedListheight + "px" }}
            >
                <a href={game.link}>{game.surname} Website</a>
                <li>Released: {game.release}</li>
                <li>Platforms: {game.platforms}</li>
                <li>Main Genre: {game.genre}</li>
                <li>Developer: {game.developers}</li>
                <li>Publisher: {game.publishers}</li>
            </ul>
        </div>
    );
};

export default GameColapseInfo;
