import React from 'react'
import { config } from "@/config";

const SideBar = () => {
  return (
    <div id='sideBar' className='hidden md:flex flex-col fixed left-0 top-40 h-[100dvh] w-80 bg-zinc-50 shadow-md'>
        <h2 className=''>Wells</h2>
        <input type="search" name="" id="" className='h-8 w-72 ml-3' />
    
        {/* <div className="text-sm text-muted-foreground mr-auto ml-auto">
            © {config.blog.copyright} {new Date().getFullYear()}
        </div> */}
    </div>
  )
}

export default SideBar
