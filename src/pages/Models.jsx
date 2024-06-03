import React, { useState } from 'react';
import {homePageTexts} from "../assets/consts/content"
import { StatusCard } from '../components/common/cards/StatusCard'

export const Models = () => {
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
                <div className="sticky-text h-20">{homePageTexts.videoText}</div>
            </div>
    
            <div className='full-container flex justify-center items-center'>
        <div className='container md:h-5/6 flex flex-col md:flex md:flex-row md:justify-between'>
            <div className=''>
              <StatusCard items={infoItems} />
            </div>

            <div className='flex flex-col items-start'>
            <div className='quote font-bold'>
              {homePageTexts.quotes.quote2} 
            </div>

            <div className='flex flex-col items-start'>
                 {showDetails && (
                  <div>
                 MORE DETAILS HERE
                 </div>
                 )}
                                <button onClick={toggleDetails}>READ MORE</button>

            </div>
            </div>
          
          
         
        </div>
    </div>
    </>
            
  )
}
