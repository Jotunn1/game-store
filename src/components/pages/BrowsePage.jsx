import GenresColumn from "../GenresColumn";
import Games from "../Games";

export const BrowsePage = () => {
    return (
        <div className="browse-page">
            <GenresColumn />
            <Games />
        </div>
    );
};
