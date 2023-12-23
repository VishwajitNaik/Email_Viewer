import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./EmailCard.css";
import EmailPopup from './EmailPopup'; // Import the EmailPopup component
import Email from "./Emails"
import Cards from './Cards';
import Header from './Header';


const EmailCard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [mails, setMails] = useState(Email);


  useEffect(() => {
    fetch('http://localhost:5000/api/emails')
      .then((response) => response.json())
      .then((data) => setMails(data))
      .catch((error) => console.error('Error fetching emails:', error));
  }, []);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  // Mock email data (replace it with your actual data)
  const mockEmail = {
    sender: 'bounced@flipkart.com',
    subject: 'Lorem Ipsum',
    body: 'Vestibulum sit amet ipsum aliquet, lachina nulla malesuada, massa',
    date: '26/02/2020 08:35pm',
  };

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const filterMenu = (catagory) => {
    const updatedMails = Email.filter((curElem) => {
      return curElem.catagory === catagory;
    });
    setMails(updatedMails)
}

  return (
      <>
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <Header filterMenu= {filterMenu} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Cards isPopupOpen={isPopupOpen} mails={mails} handleCardClick={handleCardClick} handlePopupClose={handlePopupClose} mockEmail={mockEmail} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
      </>
  );
}

export default EmailCard;
