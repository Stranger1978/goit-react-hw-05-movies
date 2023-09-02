import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Cast = () => { 
    const { movieId } = useParams();
     useEffect(() => { 
//HTTP /search/search-movies 
    },[])
    return (<div>Cast: { movieId}</div>)
}

