import React, { useState } from 'react';
import {homePageTexts} from "../assets/consts/content"
import { StatusCard } from '../components/common/cards/StatusCard'
import MaterialImagesGrid from '../components/common/cards/MaterialGrid';
import materialImages from "../assets/images/home/smallScale.jpg"
export const Materials = () => {
  const [showDetails, setShowDetails] = useState(false);

  const infoItems = [
    { title: 'Client', info: 'Elleric' },
    { title: 'Location', info: 'London, WC2B' },
    { title: 'Status', info: 'Current' }
];

const toggleDetails = () => {
  setShowDetails(prevShowDetails => !prevShowDetails);
};
  return (
    <>
         <div className="full-container flex justify-center items-center relative overflow-hidden">
             <img src={materialImages} className='h-full md:w-full'/>
             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Semi-transparent black layer */}
             <div className="left-10 md:left-20 absolute h-20 text-4xl font-bold text-white text-left">
                <span className='text-5xl text-left'>Materials</span> <br />
                <span className='text-2xl'>Exploring the variety</span>
            </div>
          </div>
            <div className='flex justify-center items-center'>
                <div className='container md:h-5/6 flex flex-col md:flex md:flex-row md:justify-between'>
                    
                        <StatusCard items={infoItems} />
                    
                <div className='flex flex-col justify-center w-full md:w-1/2'>
                    <div className='md:text-xl font-bold w-full text-justify'>
                    The Material Exploration section highlights our extensive research into developing innovative, sustainable materials by repurposing textile waste. 
                    {showDetails && (" Each material has been carefully crafted and tested for various applications in construction and design, showcasing the potential for eco-friendly solutions in the built environment.")}

 
                    </div>

                    <div className='text-xs md:text-l flex flex-col items-start'>
                        <button onClick={toggleDetails}>{!showDetails && ("read more")}</button>
                    </div>
                </div>
            </div>
         </div>
         <div className='container'>
            <MaterialImagesGrid/>
        </div>
    </>
            
  )
}
