import React from 'react'

export const Home = () => {
  return (
    <>
    <div className='full-container  flex justify-center items-center bg-red-400'>
        Video
    </div>
    
    <div className='full-container flex justify-center items-center'>
        <div className='container md:h-5/6 flex-col flex md:relative md:flex-row'>
            <div className='md:absolute md:top-0 md:left-0'>
                Text here
            </div>
            <div className='md:absolute md:bottom-0 md:right-0'>
                Image here
            </div>
        </div>
    </div>

    <div className='full-container flex justify-center items-center'>
        <div className='container md:h-5/6 flex flex-col items-center md:flex md:flex-row md:justify-around'>
            <div className=''>
                Text here
            </div>
            <div className=''>
                Image here
            </div>
        </div>
    </div>

    <div className='full-container flex justify-start flex flex-col'>
        <div className='container w-full text-left'>
            Featured Projects
        </div>
        <div className='w-full bg-red-300'>
            CARDS
        </div>
    </div>
    <div className='container flex justify-center items-center'>
        Footer 
    </div>
    </>
 
  )
}
