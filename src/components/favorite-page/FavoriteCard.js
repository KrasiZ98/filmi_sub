import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import { AuthContext } from '../../context/AuthContext';

export const FavoriteCard = ({ movie }) => {
    const {user, deleteFavoriteCard} = useContext(AuthContext);
    return (
        <div className='favorite-card'>
            <div className='favorite-image'>
                <Link to={`/details/${movie.id}`}>
                    <img src={movie.image} alt="Movie Image" />
                </Link>
            </div>

            <div className='favorite-info'>
                <h4>{movie.title}</h4>
                <p> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /> {movie.rating}</p>
                <p>{movie.release_year}</p>
                <button onClick={() => deleteFavoriteCard(movie.id, user.id)}>
                    <AiFillDelete />
                    Delete
                </button>
            </div>

        </div>
    )
}
