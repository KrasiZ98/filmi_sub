import React, { useContext } from 'react'
import { Card } from '../home-page/Card'
import { MovieContext } from '../../context/MovieContext'

export const Category = () => {
  const {filterMovies} = useContext(MovieContext);
  
  return (
    <section className='home-section'>
      <div className='whraper'>
        {filterMovies.length > 0
          ? filterMovies.map(movie =>
            <Card
              key={movie.id}
              movie={movie}
            />) :
          <h1>No Movies In Data!</h1>}
      </div>
    </section>
  )
}

