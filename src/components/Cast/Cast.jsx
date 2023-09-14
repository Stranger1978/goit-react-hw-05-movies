import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ApiMovieCredits } from '../../Services/API-query';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
}

export const Cast = () => { 
    const { movieId } = useParams();
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
    const [movieCredits, setMovieCretits] = useState([]);

    useEffect(() => {
        setStatus(STATUS.PENDING);
        
        ApiMovieCredits(movieId).then((results) => {
            if (!results) {
                setStatus(STATUS.REJECTED);
                setError('Information not found!');
                return;
            }
            const creditsInfo = results.cast.map(({ id, name, profile_path, character }) =>
            ({
                id,
                name,
                profilePath: profile_path,
                character
            }));

            setMovieCretits(creditsInfo);
            setStatus(STATUS.RESOLVED);
            setError('');
        });      
    }, [movieId]);

    return (<div>
            {status === STATUS.PENDING && <Loader/>}
            {status === STATUS.REJECTED && <NotFound message={error} />}
            {status === STATUS.RESOLVED && (
            <ul>
                {movieCredits.map(({ id, name, profilePath, character }) => {
                    return (
                        <li key={id}>
                            <img width="180px"
                                src={
                                    profilePath
                                        ? `https://image.tmdb.org/t/p/w500${profilePath}`
                                        : `https://upload.wikimedia.org/wikipedia/commons/c/c8/ImageNA.svg`
                                }
                                alt={name}
                            />
                            <h3>{name ? name : 'Without  name'}</h3>
                            <h4>{character ? `Character: ${character}` : 'Character: Information is absent'}</h4>
                        </li>
                    );
                })}
            </ul>)}
    </div>)
}

