import { Link, Outlet } from "react-router-dom";
import Style from './MovieCard.module.css';
import PropTypes from 'prop-types';
import { Suspense } from "react";
import Loader from '../../components/Loader';

const MovieCard = ({ movies }) => {
    const {
        genres,
        vote_average,
        original_title,
        release_date,
        overview,
        poster_path } = movies;
    const rating = vote_average ? `${Math.round(vote_average * 10)}%`: "Absent!";
    const year = release_date ? release_date.slice(0, 4) : "Absent!";
    const genresList = genres.map(genre => genre.name).join(', ');
    const poster_link = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `https://upload.wikimedia.org/wikipedia/commons/c/c8/ImageNA.svg`;
    return (
        
        <section>
            <div className={Style.mainInfo}>
            <div >
                <img src={poster_link} className={Style.poster} alt={original_title}/>
            </div>
            <div> <h1>{original_title}({year})</h1>
                <p>User Scores: {rating}</p>
                <h2>Overview:</h2>
                <p>{overview ? overview : "Information is absent!"}</p>
                <h2>Genres:</h2>
                <p>{genresList ? genresList : "Information is absent!"}</p>
                </div>
        </div>
        <h3 className={Style.addInfo}>Additional information</h3>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense> 
        </section>
    )
}

export default MovieCard;

MovieCard.propTypes = {
    movies: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.array,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};