import './navigation.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLogin } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { SideBar } from './SideBar';
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri"
import { MovieContext } from '../../context/MovieContext';
import { AuthContext } from '../../context/AuthContext';


export const Navigation = () => {

    const { user, authLogout } = useContext(AuthContext);
    const { movies, searchCategory } = useContext(MovieContext);


    const [openSidebar, setOpenSidebar] = useState(false);
    const [screenSize, setScreenSize] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const allGenre = [...new Set(movies.map(x => x.genre))];
    const casts = movies.reduce((allCasts, movie) => allCasts.concat(movie.cast).sort(), []);
    const uniqueCasts = [...new Set(casts)];
    const allDate = [...new Set(movies.map(x => x.release_year).sort())];
    const allDirector = [...new Set(movies.map(x => x.director).sort())];


    useEffect(() => {

        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

    }, []);



    function onChange(e) {
        setSearchValue(e.target.value);
    }



    return (
        <>

            <header className='header'>
                <div className='logo'>
                    {
                        screenSize < 1283 && <FaBars
                            onClick={() => setOpenSidebar(!openSidebar)}
                            className='drop-bar'
                        />
                    }

                    <Link to='/'>
                        <h1>Filmi Sub</h1>
                    </Link>
                </div>

                {screenSize > 1283 &&

                    <div className='category'>

                        <select name="genre" id="genre"  >
                            <option value="">Genre</option>
                            {allGenre.map((genre, index) => (
                                <option
                                    onClick={() => searchCategory(genre)}
                                    key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                        <select name="cast" id="cast"  >
                            <option value="cast">Cast</option>
                            {uniqueCasts.map((cast, index) => (
                                <option
                                    onClick={() => searchCategory(cast)}
                                    key={index} value={cast}>{cast}</option>
                            ))}
                        </select>
                        <select name="date" id="date" >
                            <option value="date">Date</option>
                            {allDate.map((date, index) => (
                                <option
                                    onClick={() => searchCategory(Number(date))}
                                    key={index} value={date}>{date}</option>
                            ))}
                        </select>
                        <select name="director" id="director" >
                            <option value="director">Director</option>
                            {allDirector.map((director, index) => (
                                <option
                                    onClick={() => searchCategory(director)}
                                    key={index} value={director}>{director}</option>
                            ))}
                        </select>
                        <Link to='/favorite-list'>
                            <button>favorite</button>
                        </Link>

                    </div>
                }
                <div className='search-comp'>
                    <IoSearchOutline onClick={() => searchCategory(searchValue)} className='search-icon' />
                    <input onChange={onChange} value={searchValue} type="text" name="search" />
                </div>

                <div className='links'>
                    {user.email ?
                        <>
                            <Link to={`/profile/${user.id}`} >

                            </Link>

                            <Link to='/profile'>
                                <FaUserAlt className='link-icon' />
                            </Link>

                            <Link onClick={() => authLogout()} >
                                <RiLogoutCircleLine className='link-icon' />
                            </Link>
                        </>
                        :
                        <Link to='/login' className='link-item'>
                            <AiOutlineLogin /> Login/Register
                        </Link>
                    }
                </div>

            </header>



            <hr className="trait" />
            {openSidebar && screenSize < 1162 && <SideBar
                allGenre={allGenre}
                uniqueCasts={uniqueCasts}
                allDate={allDate}
                allDirector={allDirector}
                searchCategory={searchCategory}

            />}
        </>
    )
}
