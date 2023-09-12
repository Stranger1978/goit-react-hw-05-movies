import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiMovieDetails } from "../../Services/API-query";
import MovieCard from "components/MovieCard/MovieCard";
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
 
    
    
    useEffect(() => {
        const detailsInfo = async () => {
            setStatus(STATUS.PENDING);

            try {
                const results = await ApiMovieDetails(movieId);
                console.log(results);
                
                setMovieDetail(...movieId, results);
                setStatus(STATUS.RESOLVED);
                setError('');
            } catch (error) {
                setStatus(STATUS.REJECTED);
                setError(error.message);
            }
        };
        detailsInfo();
         console.log(movieDetail);
        }, [movieDetail, movieId]);
       
    return (
    
   <div>
        {status === STATUS.PENDING && <Loader/>}
        {status === STATUS.REJECTED && <NotFound message={error} />}
        {status === STATUS.RESOLVED && <MovieCard movies={movieDetail} />}
    </div> 
    )
}

export default MovieDetails;

 //<Button onClick={} />