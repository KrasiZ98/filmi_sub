import './sideBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = ({ allGenre, uniqueCasts, allDate, allDirector, searchCategory, }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar-category'>
                <select name="genre" id="genre" >
                    <option value="genre">Genre</option>
                    {allGenre.map((genre, index) => (
                        <option
                            onClick={() => searchCategory(genre)}
                            key={index} value="genre">{genre}</option>
                    ))}
                </select>
                <select name="cast" id="cast">
                    <option value="cast">Cast</option>
                    {uniqueCasts.map((cast, index) => (
                        <option
                            onClick={() => searchCategory(cast)}
                            key={index} value="cast">{cast}</option>
                    ))}
                </select>
                <select name="date" id="date">
                    <option value="date">Date</option>
                    {allDate.map((date, index) => (
                        <option
                            onClick={() => searchCategory(date)}
                            key={index} value="date">{date}</option>
                    ))}
                </select>
                <select name="director" id="director">
                    <option value="director">Director</option>
                    {allDirector.map((director, index) => (
                        <option
                            onClick={() => searchCategory(director)}
                            key={index} value="director">{director}</option>
                    ))}
                </select>

                <Link to="/favorite-list">
                    <button>favorite</button>
                </Link>


            </div>
        </div>
    )
}
