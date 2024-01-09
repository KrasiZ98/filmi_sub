import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/hook-localStorage/useLocalStorage";
import { AUTH_KEY_STORAGE } from "../api/api";
import useGetAllUsers from "../custom-hooks/hooks-request/useGetAllUsers";
import * as authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [state, setState] = useLocalStorage(AUTH_KEY_STORAGE, []);
    const {users, setUsers, loading, fetchError} = useGetAllUsers([]);
    const [serverError, setServerError] = useState(null);
    const navigate = useNavigate();



    async function authRegister(user) {

        if (users.length > 0) {
            if (users.some(x => x.email === user.email || x.username === user.username)) {
                setServerError('Email or username is taken!!!');
                setTimeout(() => {
                    setServerError(null);
                }, 6000);
                return serverError;
            }

            await authServices.register(user);
            setState(user);
            navigate('/');
        }
    }

     function authLogin(user) {
        const existinUser = users.find(x => x.email === user.email);
        if (existinUser == undefined) {
            setServerError('Email or Password don\t match!!!');
            setTimeout(() => {
                setServerError(null);
            }, 6000);
            return serverError;
        }

        if (existinUser.password !== user.password) {
            setServerError('Email or Password don\t match!!!');
            setTimeout(() => {
                setServerError(null);
            }, 6000);
            return serverError;
        }

        setState(existinUser);
        navigate('/')
    }


    function authLogout() {
        localStorage.clear(AUTH_KEY_STORAGE);
        setState({});
        navigate('/');
    }

    async function authUpdate(id, user) {
        const result = await authServices.udpate(id, user)
        setUsers(users.find(x => x.id === id ? result : x));
        setState(user);
        navigate('/profile')
    }

    async function authDelete(userId) {
        const choice = window.confirm('Are you sure you want to delete a account');
        if (choice) {
            await authServices.remove(userId);
            setUsers(users.filter(x => x.id !== userId));
            setState({});
            navigate('/');
        } else {
            return
        }
    }

    async function addFavoriteToList(movie, userId) {
        const updateList = {
            ...state,
            favoriteList: [...state.favoriteList, movie]
        }

        const result = await authServices.udpate(userId, updateList);
        setUsers(users.map(x => x.id === userId ? result : x));
        setState(updateList);
    }

    async function deleteFavoriteCard(cardId, userId) {
        const choice = window.confirm('Are you sure you want to delete a card');
        if (choice) {
            const updateList = {
                ...state,
                favoriteList: state.favoriteList.filter(x => x.id !== cardId)
            }

            const result = await authServices.udpate(userId, updateList);
            setUsers(users.map(x => x.id === userId ? result : x));
            setState(updateList);
        } else {
            return;
        }
    }


    return (
        <AuthContext.Provider value={{
            user: state,
            users,
            serverError,
            serverError,
            loading,
            fetchError,
            authRegister,
            authLogout,
            authLogin,
            authUpdate,
            authDelete,
            addFavoriteToList,
            deleteFavoriteCard
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;