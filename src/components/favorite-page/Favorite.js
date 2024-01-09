import './favorite.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GrCatalogOption } from "react-icons/gr";
import { FavoriteCard } from './FavoriteCard';

export const Favorite = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className='favorite-page'>

            {user.email === undefined &&
                <div className='login-info'>
                    <h2>You Don't Have Account Yet</h2>
                    <h2>If You Want To Have Favorite List</h2>
                    <Link to='/login'>
                        <button><AiOutlineLogin className='icon' /> Login</button>
                    </Link>
                </div>
            }

            {user.email && user.favoriteList.length === 0 &&
                <div className='add-info'>
                    <h2>You Don't Have Favorite List Yet</h2>
                    <h2>If You Want See Catalog</h2>
                    <Link to='/'>
                        <button><GrCatalogOption className='icon' /> Catalog</button>
                    </Link>
                </div>
            }

            {user.email && user.favoriteList.length > 0 &&
                <div>
                    <h1 className='title'>Favorite List</h1>
                    <div className='whraper-favorite'>

                        {user.favoriteList.map(x => <FavoriteCard key={x.id} movie={x} />)}
                    </div>
                </div>
            }
        </div>
    )
}

