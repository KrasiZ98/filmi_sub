import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import editValidation from '../../components/edit-profile/editValidation';
import { useParams } from 'react-router-dom';


export const useFormEdit = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { authUpdate } = useContext(AuthContext);


    const [formValue, setFormValue] = useState({
        email: user.email,
        username: user.username,
        password: user.password,
        reppass: user.reppass,
        image: user.image,
        favoriteList: user.favoriteList,
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
        const error = editValidation(formValue);
        setFormError(error);

        setTimeout(() => {
            setFormError({})
        }, 6000)

        if (Object.values(error).length === 0) {
            authUpdate(id, formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
