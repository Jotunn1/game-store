import { PrIcon } from "./PrIcon"

export const PrGenreBtn = ({ icon, genreName, setGenreState }) => {
    return (
        <button className="button genre-btn" >
            <div className="genre-icon">
                {/* <PrIcon iconName={icon} /> */}
            </div>

            <h3>{genreName}</h3>
        </button>
    )
}
