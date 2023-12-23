import React from 'react';
import "./EmailPopup.css"; // Add your styles for the popup

const EmailPopup = ({ onClose, email }) => {
  return (
    <div className="email-popup">
      <div className="popup-content">
        {/* Display the full email content here */}
        <h2>{email.subject}</h2>
        <p>From: {email.sender}</p>
        <p>{email.body}</p>
        {/* Add more details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EmailPopup;
