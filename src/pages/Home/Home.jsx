import NotFound from '../../components/NotFound';
import { useEffect, useState } from "react";
import { ApiTrendsMovie } from '../../Services/API-query';
import  Loader  from '../../components/Loader';
import MoviesList from '../../components/MoviesList';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const Home = () => { 
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus(STATUS.PENDING);
        ApiTrendsMovie().then(({ results }) => {
            if (!results.ok) {
                setStatus(STATUS.REJECTED);
                setError(results.status);
            }
            setMovies([...results]);
            setStatus(STATUS.RESOLVED);
            setError(null);
        })
    }, []);
    
        return (
            <div>
                <h1>Trending last week</h1>
                {status === STATUS.PENDING && <Loader/>}
                {status === STATUS.REJECTED && <NotFound message={error} />}
                {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
            </div>    
        );
    };

export default Home;