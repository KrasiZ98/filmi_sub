import React, { useContext, useState } from 'react'
import loginValidation from '../../components/login-page/loginValidation';
import { AuthContext } from '../../context/AuthContext';

export default function useFormLogin() {

    const { authLogin } = useContext(AuthContext);

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
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
        const error = loginValidation(formValue);
        setFormError(error);

        setTimeout(() => {
            setFormError({})
        }, 6000)

        if (Object.values(error).length === 0) {
            authLogin(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
