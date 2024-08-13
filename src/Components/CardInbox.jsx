import React from 'react';

const cardinbox = ({ from, subject, body }) => {
  return (
    <div>
      <p>From: {from}</p>
      <p>Subject: {subject}</p>
      <p>Body: {body}</p>
    </div>
  );
}

export default cardinbox;