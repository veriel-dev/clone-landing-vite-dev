import React from 'react';
import styles from './search.module.css';

export const Search = () => {
  const {
    'nav-bar-search': navBarSearch,
    'doc-search-button': docSearchButton,
    'doc-search-button-container': buttonContainer,
    'search-icon': searchIcon,
    'doc-search-search-icon': searchIconDoc,
    'doc-search-placeholder': placeholder,
    'doc-search-button-keys': buttonKeys,
    'doc-search-button-key': buttonKey,
  } = styles;

  return (
    <div className={navBarSearch}>
      <div id="docsearch">
        <button type="button" className={`doc-search ${docSearchButton}`} aria-label="Search">
          <span className={buttonContainer}>
            <span className={`${searchIcon} ${searchIconDoc}`} />
            <span className={placeholder}>Search</span>
          </span>
          <span className={buttonKeys}>
            <span className={buttonKey} />
            <span className={buttonKey}>K</span>
          </span>
        </button>
      </div>
    </div>
  );
};
