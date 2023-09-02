import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Reviews = () => { 
    const { movieId } = useParams();
     useEffect(() => { 
//HTTP /search/search-movies 
    },[])

    return (<div>Reviews: {movieId }</div>)
}
