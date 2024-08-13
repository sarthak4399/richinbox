import React from 'react';

const InboxItem = ({ email, onSelect }) => {
  return (
    <li 
      className='mb-4 p-2 border-b border-gray-200 cursor-pointer'
      onClick={() => onSelect(email)} // Call onSelect with the email
    >
      <p><strong>From:</strong> {email.fromName}</p>
      <p><strong>Subject:</strong> {email.subject}</p>
      <p className='text-sm text-gray-600'>
        <strong>Sent At:</strong> {new Date(email.sentAt).toLocaleString()}
      </p>
    </li>
  );
};

export default InboxItem;
