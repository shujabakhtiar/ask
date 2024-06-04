import React, { useState } from 'react';
import {homePageTexts} from "../assets/consts/content"
import { StatusCard } from '../components/common/cards/StatusCard'
import MaterialImagesGrid from '../components/common/cards/MaterialGrid';

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
         <div className="full-container flex justify-center items-center bg-red-400 relative overflow-hidden">
            <div className="sticky-text h-20">
                 {homePageTexts.videoText}
            </div>
          </div>
            <div className='flex justify-center items-center'>
                <div className='container md:h-5/6 flex flex-col md:flex md:flex-row md:justify-between'>
                    
                        <StatusCard items={infoItems} />
                    
                <div className='flex flex-col justify-center w-full md:w-1/2'>
                    <div className='md:text-xl md:font-bold w-full text-left'>
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
