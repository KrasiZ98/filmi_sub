import React, { useEffect, useState } from 'react'
import { USERS_API_BASE_URL } from '../../api/api';

export default function useGetAllUsers(initialValue) {
    const [users, setUsers] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(USERS_API_BASE_URL);

                if (response.ok === false) {
                    const error = await response.json();
                    throw new Error(error.message);
                }

                const result = await response.json();
                setUsers(result);

            } catch (error) {
                console.error("Error from fetch users:", error.message)
            setFetchError(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    return {users, setUsers, loading, fetchError};
}
