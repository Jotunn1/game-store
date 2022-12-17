import { useEffect, useState } from "react";
import GenresColumn from "../GenresColumn";
import Games from "../Games";

export const BrowsePage = () => {
    const [selectedGenre, setSelectedGenre] = useState("none");
    console.log(selectedGenre, "from browse");

    return (
        <div className="browse-page">
            <GenresColumn setSelectedGenre={setSelectedGenre} />
            <Games
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />
        </div>
    );
};
