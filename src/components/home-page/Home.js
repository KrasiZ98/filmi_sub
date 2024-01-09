import './home.css'
import { MovieContext } from '../../context/MovieContext'
import { Card } from './Card';
import React, { useContext } from 'react'

export const Home = () => {
    const { movies, loading, fetchError } = useContext(MovieContext);

    if (loading) {
        return <h1 style={{color: 'wheat'}}>Loading...</h1>
    }

    if (fetchError !== null) {
        return <h1 style={{color: 'red'}}>{fetchError}</h1>
    }

  
    return (
        <section className='home-section'>
            <div className='whraper'>
                {movies.length > 0
                    ? movies.map(movie =>
                        <Card
                            key={movie.id}
                            movie={movie}
                        />) :
                    <h1>No Movies In Data!</h1>}
            </div>
        </section>
    )
}


// title
// release_year