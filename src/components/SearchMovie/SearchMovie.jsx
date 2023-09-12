import { useState } from 'react';
import Style from './SearchMovie.module.css';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

const SearchMovie = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = e => {
        const { value } = e.target;
        setSearchValue(value.toLowerCase().trim());
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(searchValue);
        setSearchValue('');
    }
    
    return (
        <form className={Style.SearchForm} onSubmit={handleSubmit}>
             <input
          className={Style.SearchFormInput}
          type="text"
           autoComplete="off"
           autoFocus
            value={searchValue}
            placeholder="Search movie"
            onChange={handleChange}
        />
          <button type="submit" className={Style.SearchButton}>
           <BsSearch className={Style.ButtonIcon} />
          <span className={Style.SearchButtonLabel}>Search</span>
        </button>
      </form>
  )
};
 
export default SearchMovie;

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};