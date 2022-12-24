import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as SearchLogo } from "../assets/images/search.svg";
import { actions } from "../store/actions";

export const SearchBar = () => {
    const searchRequest = useSelector((state) => state.searchRequest);

    useEffect(() => {
        console.log(searchRequest, "search request");
        // inputRef.current.value = "";
    }, [searchRequest]);

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
