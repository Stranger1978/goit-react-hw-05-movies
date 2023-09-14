import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from './Button.module.css';

const Button = ({ location }) => { 
    return (
        <>
            <Link to={location} className={Style.backLink}>&#11013; Back to</Link>
        </>
    );
}

export default Button;

Button.propTypes = {
    location: PropTypes.any.isRequired,
};