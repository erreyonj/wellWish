import React from 'react'
import { ReactNode } from 'react'

const ContentWindow = ({ children }: any) => {
  return (
    <div className='p-1 h-[85dvh] md:ml-20 overflow-scroll'>
      <h1 className='mx-auto h-[15%] border border-stone-500 flex flex-col place-content-center'>Title of Content Goes Here</h1>
      { children }
    </div>
  )
}

export default ContentWindow
