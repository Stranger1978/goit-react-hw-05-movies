import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useRef} from "react";
import { ApiMovieDetails } from "../../Services/API-query";
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import Button from '../../components/Button';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const MovieDetails = () => {
    const location = useLocation();
    const linkBack = useRef(location.state?.from ?? '/');

    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);

    console.log(location);
    console.log(linkBack);
 
    useEffect(() => {
            setStatus(STATUS.PENDING);

        ApiMovieDetails(movieId).then((results) => {
            if (!results) {
                setStatus(STATUS.REJECTED);
                setError('Movie details not found!');
                return;
            }
            setMovieDetail(results);
            setStatus(STATUS.RESOLVED);
            setError('');

        });
        }, [movieId]);
       
    return (
    
    <div>
        <Button location={linkBack.current} />
        {status === STATUS.PENDING && <Loader/>}
        {status === STATUS.REJECTED && <NotFound message={error} />}
        {status === STATUS.RESOLVED && <MovieCard movies={movieDetail} />}
    </div> 
    )
}

export default MovieDetails;