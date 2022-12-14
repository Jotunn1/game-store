
export const PrGenreBtn = ({ children, genreName, setGenreState }) => {
    return (
        <button className="button genre-btn" >
            <div className="genre-icon">
                {children}
            </div>
            <h3>{genreName}</h3>
        </button>
    )
}
