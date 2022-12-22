import GenresColumn from "../GenresColumn";
import Games from "../Games";

const BrowsePage = () => {
    return (
        <div className="browse-page">
            <GenresColumn />
            <Games />
        </div>
    );
};

export default BrowsePage;
