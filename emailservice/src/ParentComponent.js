// ParentComponent.js

import React, { useState, useEffect } from 'react';
import Header from './Header';
import EmailList from './EmailList'; // Import your EmailList component

const ParentComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('unread'); // Default category

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Fetch and update emails for the new page and category from your backend
  };

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
    // Fetch and update emails for the current page and new category from your backend
  };

  // Fetch and update emails when the component mounts, or when currentPage or currentCategory changes
  useEffect(() => {
    // Fetch and update emails based on the current page and category from your backend
  }, [currentPage, currentCategory]);

  return (
    <div>
      <Header onPageChange={handlePageChange} onCategoryChange={handleCategoryChange} />
      <EmailList currentPage={currentPage} currentCategory={currentCategory} />
    </div>
  );
};

export default ParentComponent;
