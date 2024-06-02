import React from 'react'
import {homePageTexts} from "../assets/consts/content"
import { FeaturedProjectsList } from '../components/common/cards/FeaturedProjectsList'
export const Home = () => {

  return (
    <>
   <div className="full-container flex justify-center items-center bg-red-400 relative overflow-hidden">
                <div className="sticky-text h-20">{homePageTexts.videoText}</div>
            </div>
    
    <div className='full-container flex justify-center items-center'>
        <div className='container md:h-5/6 flex-col flex md:relative md:flex-row'>
            <div className='md:absolute md:top-0 md:left-0 font-bold quote'>
                {homePageTexts.quotes.quote1}
            </div>
            <div className='md:absolute md:bottom-0 md:right-0'>
                Image here
            </div>
        </div>
    </div>

    <div className='full-container flex justify-center items-center'>
        <div className='container md:h-5/6 flex flex-col items-center md:flex md:flex-row md:justify-around'>
            <div className=''>
                Image here
            </div>
            <div className='quote'>
            {homePageTexts.quotes.quote2}

            </div>
        </div>
    </div>

    <div className='flex justify-start flex flex-col'>
        <div className='w-full bg-red-300'>
        <div className='container w-full text-left'>
            <FeaturedProjectsList/>
        </div>
        </div>
    </div>

    </>
 
  )
}
