import React from 'react'

export const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className="search-bar">
            <label>Search </label>
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </div>
    )
}

export default Search;