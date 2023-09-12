import { Link, Outlet } from "react-router-dom";
const MovieCard = ({ movieDetail }) => { 
   // console.log(movieDetail);
    const {
        
      //  { genres },
          //  id,
            original_title,
            release_date,
            overview,
            poster_path } = movieDetail;
    const year = release_date.slice(0, 4);
  //  const genresList = genres.map(genre => genre.name).join(',');
    return (
         <>
            <div> <h1>{original_title}({year})</h1>
                <p>{poster_path}</p>
                <p>User Scores:</p>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <h2>Genres:</h2>
                <p></p>
            </div>
    <h3>Additional information</h3>
        <ul>
            <li>
                <Link to='{cast}'>Cast</Link>
            </li>
            <li>
                <Link to='{reviews}'>Reviews</Link>
            </li>
            </ul>
            <Outlet/>
            </>
    )
}

export default MovieCard