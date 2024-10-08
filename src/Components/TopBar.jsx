import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import ThemeChange from './ThemeChnage'
const TopBar = () => {
  return (
    <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed px-14 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
      <div className=' ml-10'>Onebox</div>
      <div className="pr-10 flex items-center">
        <ThemeChange />
        Tim's Workspace <FaAngleDown className="text-3xl ml-3" />
    </div>
    </div>
  )
}

export default TopBar
