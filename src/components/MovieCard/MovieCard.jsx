import { Link, Outlet } from "react-router-dom";
import Style from './MovieCard.module.css';

const MovieCard = ({ movies, linkBack }) => { 
    console.log(linkBack);
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
            <div className={Style.main_info}>
            <div className="poster">
                <img src={poster_link} alt={original_title} width="220px"/>
            </div>
            <div> <h1>{original_title}({year})</h1>
                <p>User Scores: {rating}</p>
                <h2>Overview:</h2>
                <p>{overview ? overview : "Information is absent!"}</p>
                <h2>Genres:</h2>
                <p>{genresList ? genresList : "Information is absent!"}</p>
                </div>
        </div>
        <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to='cast' state={{ from: linkBack }}>Cast</Link>
                </li>
                <li>
                    <Link to='reviews' state={{ from: linkBack }}>Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </section>
    )
}

export default MovieCard