import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as SearchLogo } from "../assets/images/search.svg";
import { actions } from "../store/actions";

export const SearchBar = () => {
    // const searchRequest = useSelector(state => state.searchRequest);

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    return (
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Search games..." />
            <button
                className="button"
                onClick={() =>
                    dispatch(actions.setSearchRequest(inputRef.current.value))
                }
            >
                <SearchLogo />
            </button>
        </div>
    );
};
