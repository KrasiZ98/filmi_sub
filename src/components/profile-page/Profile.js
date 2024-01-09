import './profile.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';


export const Profile = () => {
    const { user, authDelete } = useContext(AuthContext);

   
    return (
        <div className='profile-page'>
            <div className='profile'>

                <div className='profile-image'>
                    <img src={user.image} alt="Profile Image" />
                </div>

                <div className='profile-info'>
                    <h4>Email: {user.email}</h4>
                    <h4>Username: {user.username}</h4>
                </div>

                <div className='profile-action'>
                    <Link to={`/edit-profile/${user.id}`}>
                        <button className='edit-btn'>
                            <FaUserEdit className='profile-icon' />
                            Edit Profile
                        </button>
                    </Link>
                    <Link>
                        <button onClick={() => authDelete(user.id)} className='delete-btn'>
                            <AiFillDelete className='profile-icon' />
                            Delete Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
