import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SearchLogo } from '../assets/images/search.svg';


export const SearchBar = () => {
    // const searchRequest = useSelector(state => state.searchRequest);

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    return (
        <div className='search-bar'>
            <input ref={inputRef} type="text" placeholder='Search games...' />
            <button className='button' onClick={() => dispatch({ type: "SET_SEARCH", payload: inputRef.current.value })}>
                <SearchLogo />
            </button>
        </div>
    )
}
