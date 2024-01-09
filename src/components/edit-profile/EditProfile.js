import React, { useContext } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaLock } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { FaImages } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext';
import { useFormEdit } from '../../custom-hooks/hook-forms/useFormEdit';

export const EditProfile = () => {
const  { formValue, formError, onChange, onSubmit } = useFormEdit()
    return (
        <div className='form-component'>
            <div className='form-whrapper'>
                <form onSubmit={onSubmit}>
                    <h1>Edit Profile</h1>

                    <div className='form-group'>
                        <input type="text" placeholder="email" name="email"
                        onChange={onChange} value={formValue.email} 
                        />
                        {<TfiEmail className='icon' />}
                    </div>

                    <div className='form-group'>
                        <input type="text" placeholder="username" name="username"
                        onChange={onChange} value={formValue.username}
                        />
                        {<FaUser className='icon' />}
                    </div>

                    <div className='form-group'>
                        <input type="password" placeholder="password" name="password"
                        onChange={onChange} value={formValue.password}
                        />
                        {<FaLock className='icon' />}
                    </div>

                    <div className='form-group'>
                        <input type="password" placeholder="confirm password" name="reppass"
                        onChange={onChange} value={formValue.reppass}
                        />
                        {<FaLock className='icon' />}
                    </div>

                    <div className='form-group'>
                        <input type="text" placeholder="image" name="image"
                        onChange={onChange} value={formValue.image}
                        />
                        {<FaImages className='icon' />}
                    </div>

                    <button type='submit' className='form-btn'>Edit</button>
                    <div className='link'>

                        {/* <span>If You Have Account <Link to="/login">Login</Link></span> */}
                    </div>
                </form>

            </div>

        </div>
    )
}

