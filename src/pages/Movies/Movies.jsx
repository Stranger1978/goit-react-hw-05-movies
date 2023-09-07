import NotFound from '../../components/NotFound';
import SearchMovie from "components/SearchMovie";
import { useEffect, useState } from "react";
import { ApiFindMovie } from '../../Services/API-query';
import  Loader  from '../../components/Loader';
import MoviesList from '../../components/MoviesList';
//import { toast } from 'react-toastify';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const Movies = () => { 
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
    const [queryValue, setQueryValue] = useState('');
    const [movies, setMovies] = useState([]); 

    useEffect(() => {
        setStatus(STATUS.PENDING);
        ApiFindMovie(queryValue).then(({ results }) => {
            if (!results.ok) {
                setStatus(STATUS.REJECTED);
                setError(results.status);
            }
            console.log(results);
       //     if (results.length === 0) {
       //         setMovies([]);
       //         setError("Movie not found!");
       //         setStatus(STATUS.REJECTED);
       //         return;
       //     }
            
            setMovies([...results]);
            setStatus(STATUS.RESOLVED);
            setError(null);
        })

    }, [queryValue]);      
     
    const onSubmitForm = value => {
        setMovies([]);
        setStatus(STATUS.PENDING);
        setQueryValue(value);
    };
    
    return (
        <div>
            <SearchMovie onSubmit={onSubmitForm } />
                {status === STATUS.PENDING && <Loader/>}
                {status === STATUS.REJECTED && <NotFound message={error} />}
                {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
            </div> 
    )
}

export default Movies;