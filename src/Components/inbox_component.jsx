import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import InboxList from './InboxList';  // Component to display list of emails
import ThradeComponent from './Thrade';  // Component to display email thread details

const InboxComponent = () => {
  const [data, setData] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const storedIsDarkMode = localStorage.getItem("isDarkMode");
        if (storedIsDarkMode) {
          setIsDarkMode(JSON.parse(storedIsDarkMode));
        }
      }, []);
      

  const fetchInbox = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No auth token found');
      setLoading(false);
      return;
    }


    try {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setData(result.data);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInbox();
  }, []);

  const handleSelectEmail = (email) => {
    setSelectedEmail(email); // Set the selected email
  };

  return (
    <div className='flex flex-col md:flex-row h-full'>
      {/* Inbox List */}
      <div className='md:w-[278px] w-full border-r-2 border-gray-200 h-full overflow-y-auto'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between p-4 border-b border-gray-200'>
            <div className='flex flex-col'>
              <span className='text-[#4285F4] text-lg font-bold'>All Inbox(s)</span>
              <div className='text-sm text-gray-600'>
                <span className='text-white'>25/25</span> Inbox Selected
              </div>
            </div>
            <FaChevronDown className='text-[#4285F4]' />
            <IoMdRefresh 
              className='text-[#F6F6F6] w-[32px] h-[32px] rounded-sm p-1 cursor-pointer' 
              onClick={fetchInbox} 
            />
          </div>
          <div className='border-b border-gray-200 p-4'>
            <div className='relative w-full mb-4'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full h-[44px] pr-10 pl-10 border border-gray-300 rounded-md'
              />
              <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            </div>
            <div className='p-2 flex items-center justify-between'>
              <div className='bg-[#222426] rounded-full w-[34px] h-[26px] flex items-center justify-center text-[#5C7CFA]'>
                26
              </div>
              <div className='text-white'>New Replies</div>
              <div className='flex items-center'>
                <h1 className='mr-1'>Newest</h1>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <div className='p-4 text-center'>Loading...</div>
        )}
        {error && (
          <p className="text-red-500 p-4 text-center">{error}</p>
        )}
        {data && !loading && (
          <InboxList data={data} onSelect={handleSelectEmail} />
        )}
      </div>
      
      {/* Email Thread */}
      <div className='flex-1 h-full overflow-y-auto'>
        {selectedEmail ? (
          <ThradeComponent email={selectedEmail} />
        ) : (
          <div className='p-4 text-center'>Select an email to view its content</div>
        )}
      </div>
    </div>
  );
};

export default InboxComponent;

