import styles from './SearchBar.module.css'; // Import the CSS module
import searchIcon from '../../assets/images/search_icon.svg';
import { useState, ChangeEvent } from 'react';

export const SEARCH_INPUT_ID = 'search-link';
const SEARCH_INPUT_PLACEHOLDER = '링크를 검색하세요';
const SEARCH_INPUT_ICON_ALT = 'Search Icon';

interface SearchBarProps {
  onSubmit: () => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [text, setText] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchBar}>
      <button className={styles.searchButton} type='submit'>
        <img src={searchIcon} alt={SEARCH_INPUT_ICON_ALT} />
      </button>
      <input
        type='text'
        name={SEARCH_INPUT_ID}
        id={SEARCH_INPUT_ID}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        className={styles.searchInput}
        value={text}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
