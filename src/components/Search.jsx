import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    // i can destructure the passed props App.jsx
    // const {searchTerm, setSearchTerm} =  props // i can also do like this, just use props in the top instead of searchTerm and setSearchTerm
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Search through thousands of movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search
