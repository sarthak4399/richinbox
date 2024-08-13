import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <div className='relative w-full mb-4'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full h-[44px] pr-10 pl-10 border border-gray-300 rounded-md'
      />
      <AiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
    </div>
  );
};

export default SearchBar;
