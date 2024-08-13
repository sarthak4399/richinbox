import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';

const InboxHeader = ({ fetchInbox }) => {
  return (
    <div className='flex items-center justify-between p-4 border-b border-gray-200'>
      <div className='flex flex-col'>
        <span className='text-[#4285F4] text-lg font-bold'>All Inbox(s)</span>
        <div className='text-sm text-gray-600'>
          <span className='text-white'>25/25</span> Inbox Selected
        </div>
      </div>
      <FaChevronDown className='text-[#4285F4]' />
      <IoMdRefresh
        className='text-[#F6F6F6] bg-[#25262B] w-[32px] h-[32px] rounded-sm p-1 cursor-pointer'
        onClick={fetchInbox}
      />
    </div>
  );
};

export default InboxHeader;
