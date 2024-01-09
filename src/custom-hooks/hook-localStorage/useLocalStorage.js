import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialValue) {
    const localStorage_data = JSON.parse(localStorage.getItem(key));
    if (localStorage_data instanceof Function) {
        return localStorage_data();
    }

    return localStorage_data ? localStorage_data : initialValue;

}

export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}
