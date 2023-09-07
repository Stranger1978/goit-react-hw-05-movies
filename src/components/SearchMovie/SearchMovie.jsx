import { useState } from 'react';
import Style from './SearchMovie.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
//import PropTypes from 'prop-types';

const SearchMovie = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');
    //const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = e => {
        const { value } = e.target;
        //setSearchParams({ query: value });
        setSearchValue(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (searchValue.trim() === '') {
            return toast.warn('Enter data for searh');
        }
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