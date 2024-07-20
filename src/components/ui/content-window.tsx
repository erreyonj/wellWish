import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { ReactNode } from 'react'

const ContentWindow = ({ children }: any) => {
  return (
    <div className='p-1 h-[85dvh] md:ml-20 overflow-scroll'>
      { children }


        {/* Below arrow system will likely be replaced by pagination component */}

      <div id="windowArrows" className='flex place-content-between my-5'>
        <div className="windowArrow left">
            <ArrowLeft />
        </div>
        <div className="windowArrow right">
            <ArrowRight />
        </div>
      </div>
    </div>
  )
}

export default ContentWindow
