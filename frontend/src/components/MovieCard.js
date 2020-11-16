import React from 'react'

const MovieCard = ({title, year, poster}) => {
    return (
        <div className="movie-card">
            <p>{title}</p>
            <img 
            alt={title} 
            src={poster} />
        </div>
    )
}

export default MovieCard
