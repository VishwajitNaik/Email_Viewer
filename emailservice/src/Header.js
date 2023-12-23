// Header.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; // Add moon and sun icons
import './Header.css';

const Header = ({ onPageChange, filterMenu, toggleDarkMode, isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage); // Notify parent component about the page change
  };

  return (
    <>
      <div className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="left-section">
          <h6>Filter By: </h6>
          <button onClick={() => filterMenu('Unread')} >Unread</button>
          <button onClick={() => filterMenu('Read')} >Read</button>
          <button onClick={() => filterMenu('Favorite')} >Favorite</button>
          <p>
            <a href="/">Clear</a>
          </p>
        </div>
        <div className="right-section">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p>{currentPage}</p>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
