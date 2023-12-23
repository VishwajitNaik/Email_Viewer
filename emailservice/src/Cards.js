import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./EmailCard.css";
import EmailPopup from './EmailPopup'; // Import the EmailPopup component
import Email from "./Emails"
import mockEmail from "./mockEmail"


const Cards = ({isPopupOpen, mails, handleCardClick, handlePopupClose, mockEmail}) => {

      
  return (
    <>
            <div>
    {
      mails.map((elem) => {
          const {id, from, subject, para, catagory, date,time} = elem;
          return (
                  <div className='card' onClick={handleCardClick} key={id}>
              <div className="avatar-container">
                <FontAwesomeIcon icon={faUser} className="avatar-icon" />
              </div>
              <div className='card-data'>
                <div>
                  <p>From: </p> <span> <b>{from}</b> </span>
                </div>
                <div>
                  <p>Subject: </p> <span> <b>{subject}</b> </span>
                </div>
                <div>
                  <p>{para}</p>
                </div>
                <div>
                  <p>{date}</p> <br /> <p>{time}</p>
                </div>
              </div>
            </div>
          )
      })
    }
  
      
      {isPopupOpen && (
        <EmailPopup onClose={handlePopupClose} email={mockEmail}  />
      )}
    </div>
    </>
  )
}

export default Cards