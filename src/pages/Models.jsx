import React, { useState } from 'react';
import { homePageTexts } from "../assets/consts/content";
import { StatusCard } from '../components/common/cards/StatusCard';
import { Link } from 'react-router-dom';
import { ImagesCarousel } from '../components/common/carousels/ImagesCarousel';
import img from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-1.jpg";

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

  const images = [
    { name: "Set A", image: img }, // Replace 'image_url_for_set_a' with the actual image URL
    { name: "Set B", image: img }, // Replace 'image_url_for_set_b' with the actual image URL
    { name: "Set C", image: img }  // Replace 'image_url_for_set_c' with the actual image URL
  ];

  return (
    <>
      <div className="full-container flex justify-center items-center bg-red-400 relative overflow-hidden">
        <div className="sticky-text h-20">
          {homePageTexts.videoText}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='container md:h-5/6 flex flex-col md:flex md:flex-row md:justify-between'>
          <div className=''>
            <StatusCard items={infoItems} />
          </div>
          <div className='flex flex-col items-start'>
            <div className='quote font-bold'>
              {homePageTexts.quotes.quote2}
            </div>
            <div className='flex flex-col items-start'>
              {showDetails && (<div> MORE DETAILS HERE </div>)}
              <button onClick={toggleDetails}>READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div 
                className={`flex justify-start flex-col items-start py-4 transition-opacity duration-1000 `}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/materials" className='text-black hover:underline text-4xl'>Set A</Link>
                    <Link to="/materials" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <ImagesCarousel imageList={images} />
                    </div>
                </div>
            </div>
            <div 
                className={`flex justify-start flex-col items-start py-4 transition-opacity duration-1000 `}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/materials" className='text-black hover:underline text-4xl'>Set B</Link>
                    <Link to="/materials" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <ImagesCarousel imageList={images} />
                    </div>
                </div>
            </div>
            <div 
                className={`flex justify-start flex-col items-start py-4 transition-opacity duration-1000 `}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/materials" className='text-black hover:underline text-4xl'>Set C</Link>
                    <Link to="/materials" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <ImagesCarousel imageList={images} />
                    </div>
                </div>
            </div>

            <div 
                className={`flex justify-start flex-col items-start py-4 transition-opacity duration-1000 `}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/materials" className='text-black hover:underline text-4xl'>Set D</Link>
                    <Link to="/materials" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <ImagesCarousel imageList={images} />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Models;
