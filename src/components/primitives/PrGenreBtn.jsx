import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";

export const PrGenreBtn = ({ children, genreName }) => {
    const dispatch = useDispatch();

    return (
        <button className="button genre-btn" onClick={() => dispatch(actions.selectGenre(genreName))} >
            <div className="genre-icon">
                {children}
            </div>
            <h3>{genreName}</h3>
        </button>
    )
}
