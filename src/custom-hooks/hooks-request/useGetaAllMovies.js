import React, { useEffect, useState } from 'react'
import { MOVIE_API_BASE_URL } from '../../api/api';

export default function useGetaAllMovies(initialValue) {

    const [movies, setMovies] = useState(initialValue);
    const [fetchError, setFetchError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(MOVIE_API_BASE_URL);

                if (response.ok === false) {
                    const error = await response.json();
                    throw new Error(error.message);
                }

                const result = await response.json();
                setMovies(result);


            } catch (error) {
                setFetchError(error.message);
                console.error("Error fetch data movies:", error.message);

            } finally {
                setLoading(false)
            }
        }

        fetchData();

    }, []);

    return { movies, setMovies, loading, fetchError };
}
