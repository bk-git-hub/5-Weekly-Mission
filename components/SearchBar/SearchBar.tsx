import styles from './SearchBar.module.scss'; // Import the CSS module
import searchIcon from '@/public/assets/images/search_icon.svg';
import { ChangeEvent } from 'react';
import deleteTextIcon from '@/public/assets/images/delete_text.png';
import Image from 'next/image';

export const SEARCH_INPUT_ID = 'search-link';
const SEARCH_INPUT_PLACEHOLDER = '링크를 검색하세요';
const SEARCH_INPUT_ICON_ALT = 'Search Icon';

interface SearchBarProps {
  onChange: (keyword: string) => void;
  searchText: string;
}

export default function SearchBar({ onChange, searchText }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  const handleSearchDelete = () => {
    onChange('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <button className={styles.searchButton} type='submit'>
        <Image src={searchIcon} alt={SEARCH_INPUT_ICON_ALT} />
      </button>
      <input
        type='text'
        name={SEARCH_INPUT_ID}
        id={SEARCH_INPUT_ID}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        className={styles.searchInput}
        value={searchText}
        onChange={handleChange}
      />
      {searchText !== '' && (
        <button onClick={handleSearchDelete} className={styles.searchButton}>
          <Image src={deleteTextIcon} alt='검색어 삭제' fill />
        </button>
      )}
    </form>
  );
}
