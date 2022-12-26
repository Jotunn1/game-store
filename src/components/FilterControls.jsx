import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/actions";

export const FilterControls = () => {
    const selectedGenre = useSelector((state) => state.selectedGenre);
    const searchRequest = useSelector((state) => state.searchRequest);
    const dispatch = useDispatch();
    return (
        <div className="filter">
            <button>
                Filter by:
                {searchRequest !== "" ? (
                    <span> Name</span>
                ) : (
                    <span>{selectedGenre}</span>
                )}
            </button>
            <button
                className="button"
                onClick={() => dispatch(actions.selectGenre("none"))}
            >
                Clear Filter
            </button>
        </div>
    );
};
