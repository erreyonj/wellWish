import { User2 } from 'lucide-react'
import React from 'react'
import { DarkModeToggle } from './DarkModeToggle'

const Settings = () => {
  return (
    <div className=' flex h-[7dvh]'>
        <div className='flex place-content-center border-[.3px] rounded-full border-gray-500 h-12 w-12 pt-2 mx-1 mt-2'>
            <User2 size="30" />
        </div>
        <h3 className='flex items-end pb-3 h-12 mx-1 mt-2 text-sm'>Username</h3>
        <div id="darkMode" className='flex flex-col place-content-center ml-[13.7rem]'>
            <DarkModeToggle />
        </div>
    </div>
  )
}

export default Settings
