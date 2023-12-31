import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiMovieReview } from '../../Services/API-query';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import Style from './Reviews.module.css';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

const Reviews = () => {
    const { movieId } = useParams();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
    const [movieReview, setMovieReview] = useState({});

    useEffect(() => {
        setStatus(STATUS.PENDING);
        ApiMovieReview(movieId).then((results) => {
            if (results.results.length === 0) {
                setStatus(STATUS.REJECTED);
                setError(`We don't nave any reviews for this movie!`);
                return;
            }
            setMovieReview(results);
            setStatus(STATUS.RESOLVED);
            setError('');
        });
    }, [movieId]);
    
    return (<div>
        {status === STATUS.PENDING && <Loader />}
        {status === STATUS.REJECTED && <NotFound message={error} />}
        {status === STATUS.RESOLVED && (
            <ul className={Style.link}>
                {movieReview.results.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            
                            <h3>{author ? `Author: ${author}` : 'Without  name'}</h3>
                            <p>{content ? content : 'Information is absent'}</p>
                        </li>
                    );
                })}
            </ul>)}
    
    
    </div>)
};

export default Reviews;
