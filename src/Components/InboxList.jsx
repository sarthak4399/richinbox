import React from 'react';
import InboxItem from './InboxItem';
import { useEffect, useState } from 'react';



const InboxList = ({ data, onSelect }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode));
    }
  }, []);

  return (
    
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4 md:text-xl'>Inbox</h2>
      <ul className='list-none p-0'>
        {data.map((email) => (
          <li key={email.id} className='mb-2'>
            <InboxItem email={email} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InboxList;
