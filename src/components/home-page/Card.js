import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ movie }) => {
    return (
     
        <div className='card'>
            <div className='image'>
                <Link to={`/details/${movie.id}`}>
                <img src={movie.image} alt="Movie Image" />
                </Link>
            </div>

            <div className='info'>
                <h3>{movie.title}</h3>
                <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /> {movie.rating}</p>
                <p>{movie.release_year}</p>
            </div>
        </div>
     
    )
}
