import { useRef, useState } from 'react';
import { ReactComponent as SearchLogo } from '../assets/images/search.svg';

export const SearchBar = ({ setSearch }) => {
    const [searchRequest, setSearchRequest] = useState('');
    const inputRef = useRef(null);

    const searchClick = () => {
        setSearchRequest(inputRef.current.value);
        console.log(searchRequest, 'searchRequest')
    }

    return (
        <div className='search-bar'>
            <input ref={inputRef} type="text" placeholder='Search games...' />
            <button className='button' onClick={searchClick}>
                <SearchLogo />
            </button>
        </div>
    )
}
