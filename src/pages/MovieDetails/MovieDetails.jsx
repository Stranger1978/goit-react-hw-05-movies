import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
     useEffect(() => { 
//HTTP /search/search-movies 
    },[])

    return (
    <>
    <div>Movie Details: {movieId}</div>
    <h3>Additional information</h3>
        <ul>
            <li>
                <Link to='{Cast}'>Cast</Link>
            </li>
            <li>
                <Link to='{Reviews}'>Reviews</Link>
            </li>
            </ul>
            <Outlet/>
            </>
    )

}

export default MovieDetails;