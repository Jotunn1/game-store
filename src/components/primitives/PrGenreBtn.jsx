
export const PrGenreBtn = ({ children, genreName, setSelectedGenre }) => {
    return (
        <button className="button genre-btn" onClick={setSelectedGenre} >
            <div className="genre-icon">
                {children}
            </div>
            <h3>{genreName}</h3>
        </button>
    )
}
