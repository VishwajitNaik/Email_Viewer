import React, { useState } from 'react';
import './App.css';
import EmailCard from './EmailCard';
import Header from './Header';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <EmailCard toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;


