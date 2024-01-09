import React, { useContext } from 'react'

import { TfiEmail } from "react-icons/tfi";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaImages } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import useFormRegister from '../../custom-hooks/hook-forms/useFormRegister';
import { ErrorBox } from '../error-box/ErrorBox';
import { AuthContext } from '../../context/AuthContext';

export const Register = () => {

  const { serverError, loading, fetchError } = useContext(AuthContext);
  const { formValue, formError, onChange, onSubmit } = useFormRegister();

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
      {formError.username && <ErrorBox error={formError.username} />}
      {formError.password && <ErrorBox error={formError.password} />}
      {formError.reppass && <ErrorBox error={formError.reppass} />}
      {formError.image && <ErrorBox error={formError.image} />}
      <div className='form-component'>
        <div className='form-whrapper'>
          <form onSubmit={onSubmit}>
            <h1>Register</h1>

            <div className='form-group'>
              <input type="text" placeholder="email" name="email"
                onChange={onChange} value={formValue.email} />
              {<TfiEmail className='icon' />}
            </div>

            <div className='form-group'>
              <input type="text" placeholder="username" name="username"
                onChange={onChange} value={formValue.username} />
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

            <button type='submit' className='form-btn'>Register</button>
            <div className='link'>

              <span>If You Have Account <Link to="/login">Login</Link></span>
            </div>
          </form>

        </div>

      </div>
    </>
  )
}
