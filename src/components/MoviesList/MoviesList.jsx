import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => { 
    

    return (
        <ul>
                {movies.map(({ id, title }) => {
                    return (
                          <li key={id}> 
                            <Link to={`/movies/${id}`}>{title}</Link>
                        </li>
                    )
                })}
                </ul>
    )
    

}

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};