import React, { useEffect, useState } from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className={styles.searchBarInput}
      />
    </div>
  );
};

export default SearchBar;