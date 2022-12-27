import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchLogo } from "../assets/images/search.svg";
import { actions } from "../store/actions";

export const SearchBar = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const magnifyingGlassClick = () => {
        if (inputRef.current.value) {
            navigate("/browse");
            dispatch(actions.setSearchRequest(inputRef.current.value));
        }
    };

    return (
        <div className="search-bar">
            <input ref={inputRef} type="text" placeholder="Search games..." />
            <button className="button" onClick={magnifyingGlassClick}>
                <SearchLogo />
            </button>
        </div>
    );
};
