import './details.css'
import React, { useContext, useState } from 'react'
import useGetMovieById from '../../custom-hooks/hooks-request/useGetMovieById'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const Details = () => {

    const { user, addFavoriteToList } = useContext(AuthContext);
    const { id } = useParams();
    const { movie, setMovie, loading, fetchError } = useGetMovieById(id, []);

    if (loading) {
        return <h1 style={{ color: 'wheat' }}>Loading...</h1>
    }

    if (fetchError !== null) {
        return <h1 style={{ color: 'red' }}>{fetchError}</h1>
    }

    return (
        <div className='details-movie'>
            <div className='details'>
                <div className='details-image'>
                    <img src={movie.image} alt="Image Movie" />
                </div>

                <div className='details-info'>
                    <h1>{movie.title}</h1>
                    <p className='rating-info'> <img
                        className='imdb-img'
                        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" />
                        {movie.rating}
                    </p>
                    <div>
                        <p>Date: {movie.release_year}</p>
                        <p>Director: {movie.director}</p>

                    </div>

                    <div className='cast'>
                        <strong>Cast: </strong>
                        {Object.values(movie.cast).flat().join(', ').split(',  ').map((name, index) => (
                            <div key={index}>
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>

                    <div>

                    </div>
                    <p>{movie.description}</p>


                    <div className='action-btn'>
                        {user.email && user.favoriteList.find(x => x.id == movie.id) == undefined &&
                            <>
                                <button onClick={() => addFavoriteToList(movie, user.id)} className='add-btn'>Add to Favorite</button>
                                {/* <button className='addet-btn'>You Add This Movie In The List</button> */}
                            </>

                        }
                        {user.email && user.favoriteList.find(x => x.id == movie.id) !== undefined &&
                            <button className='addet-btn'>You Add This Movie In The List</button>
                        }
                        {user.email === undefined &&
                            < Link to='/login'>
                                <button className='ask-btn'>To Add Login</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


// genre
// release_year
// director
// cast