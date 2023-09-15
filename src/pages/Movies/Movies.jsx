import NotFound from '../../components/NotFound';
import SearchMovie from "components/SearchMovie";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ApiFindMovie } from '../../Services/API-query';
import  Loader  from '../../components/Loader';
import MoviesList from '../../components/MoviesList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const Movies = () => {
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        const queryValue = searchParams.get('query');
        if (!queryValue) {
            return;
        }

        setStatus(STATUS.PENDING);

        ApiFindMovie(queryValue).then(({ results }) => {
            if (!results.ok) {
                setStatus(STATUS.REJECTED);
                setError(results.status);
            }

            if (results.length === 0) {
                setStatus(STATUS.REJECTED);
                setError('Movie not found!');
                return;
            }
            
            setMovies([...results]);
            setStatus(STATUS.RESOLVED);
            setError('');
        })

    }, [searchParams]);
     
    const onSubmitForm = value => {
        if (value === "") {
            toast.warn('Enter data for searh');
            return;
        }
        setSearchParams({ query: value });
    };
    
    return (
        <div>
            <SearchMovie onSubmit={onSubmitForm} />
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <NotFound message={error} />}
            {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
            <ToastContainer onClose={3000} />
        </div>
    )
};

export default Movies;