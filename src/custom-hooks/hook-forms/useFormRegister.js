import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import registerValidation from '../../components/register-page/registerValidation';

export default function useFormRegister() {

    const { authRegister } = useContext(AuthContext);

    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        password: '',
        reppass: '',
        image: '',
        favoriteList: [],
    });

    const [formError, setFormError] = useState({});

    function onChange(e) {
        setFormValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = registerValidation(formValue);
        setFormError(error);

        setTimeout(() => {
            setFormError({})
        }, 6000)

        if (Object.values(error).length === 0) {
            authRegister(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
} 
