import './login.css'
import React, { useContext } from 'react'

import { TfiEmail } from "react-icons/tfi";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useFormLogin from '../../custom-hooks/hook-forms/useFormLogin';
import { ErrorBox } from '../error-box/ErrorBox';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {

    const { serverError, loading, fetchError } = useContext(AuthContext);
    const { formValue, formError, onChange, onSubmit } = useFormLogin();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (fetchError) {
        return <div>Error: {fetchError}</div>;
    }

    return (
        <>
            {serverError && <ErrorBox error={serverError} />}
            {formError.email && <ErrorBox error={formError.email} />}
            {formError.password && <ErrorBox error={formError.password} />}

            <div className='form-component'>
                <div className='form-whrapper'>
                    <form onSubmit={onSubmit}>
                        <h1>Login</h1>
                        <div className='form-group'>
                            <input type="text" placeholder="email" name="email"
                                onChange={onChange} value={formValue.email} />
                            {<TfiEmail className='icon' />}
                        </div>

                        <div className='form-group'>
                            <input type="password" placeholder="password" name="password"
                                onChange={onChange} value={formValue.password} />
                            {<FaLock className='icon' />}
                        </div>

                        <button type='submit' className='form-btn'>Login</button>
                        <div className='link'>

                            <span>If You Don't Have Account <Link to="/register">Register</Link></span>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
