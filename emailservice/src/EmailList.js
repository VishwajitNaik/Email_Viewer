import React, { useState, useEffect } from 'react';

const EmailList = ({ currentPage }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Fetch emails from your backend based on the current page
    // This is a placeholder; replace it with your actual API call
    const fetchEmails = async () => {
      try {
        const response = await fetch(`/api/emails?page=${currentPage}`);
        const data = await response.json();
        setEmails(data); // Update the emails state with the fetched data
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, [currentPage]);

  return (
    <div className="email-list">
      {emails.map((email) => (
        <div key={email.id} className="email-item">
          {/* Display email details here */}
          <p>{email.subject}</p>
          <p>{email.sender}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
