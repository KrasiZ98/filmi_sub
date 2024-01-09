import { createContext, useState } from "react";
import useGetaAllMovies from "../custom-hooks/hooks-request/useGetaAllMovies";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {

    const { movies, setMovies, loading, fetchError } = useGetaAllMovies([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const navigate = useNavigate();

    function searchCategory(searchValue) {
     
        if (searchValue) {
            const searchMovies = movies.filter(x => {
                if (typeof searchValue === 'number') {
                    return x.release_year === Number(searchValue)
                } else if (typeof searchValue === 'string') {
                    return x.genre === searchValue ||
                        x.cast.includes(searchValue) ||
                        x.director === searchValue ||
                        x.title.toLowerCase().includes(searchValue.toLowerCase())
                }
            });

            setFilterMovies(searchMovies);
            navigate('/category/movies')
        } 
      
    
    }

    return (
        <MovieContext.Provider value={{
            movies,
            loading,
            fetchError,
            searchCategory,
            filterMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;