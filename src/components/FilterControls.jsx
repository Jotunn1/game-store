export const FilterControls = ({ selectedGenre, setSelectedGenre }) => {
    return (
        <div className="filter">
            <button>
                Filter by: <span>{selectedGenre}</span>
            </button>
            <button className="button" onClick={() => setSelectedGenre("none")}>
                {" "}
                Clear Filter
            </button>
        </div>
    );
};
