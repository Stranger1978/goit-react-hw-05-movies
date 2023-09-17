import Style from './NotFound.module.css';
import PropTypes from 'prop-types';

const NotFound = ({ message }) => {
    return (<div className={Style.errorMessage}> {message} </div> )
}
 
export default NotFound;

NotFound.propTypes = {
    message: PropTypes.string,
};