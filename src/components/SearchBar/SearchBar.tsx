import styles from './SearchBar.module.css'; // Import the CSS module
import searchIcon from '../../assets/images/search_icon.svg';
import { useState, ChangeEvent } from 'react';
import deleteTextIcon from '../../assets/images/delete_text.png';

export const SEARCH_INPUT_ID = 'search-link';
const SEARCH_INPUT_PLACEHOLDER = '링크를 검색하세요';
const SEARCH_INPUT_ICON_ALT = 'Search Icon';

interface SearchBarProps {
  onSubmit: (keyword: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [text, setText] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSearchDelete = () => {
    setText('');
  };

  return (
    <form onSubmit={() => onSubmit(text)} className={styles.searchBar}>
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
      {text !== '' && (
        <button onClick={handleSearchDelete} className={styles.searchButton}>
          <img src={deleteTextIcon} alt='검색어 삭제' />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
