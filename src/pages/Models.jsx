import React, { useState } from 'react';
import { homePageTexts } from "../assets/consts/content";
import { StatusCard } from '../components/common/cards/StatusCard';
import { Link } from 'react-router-dom';
import { ImagesCarousel } from '../components/common/carousels/ImagesCarousel';
import img from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-1.jpg";
import metroCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-1.jpg"
import metroCollection2Img from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-2.jpg"
import textTileMetroCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/textile-metro-collection-network.jpg"
import textTileMetroNetworkImg from "../assets/images/MODELS/COLLECTION NETWORK/texttile-metro-network.jpg"
import typicalTextileCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/typical-textile.jpg"

import denimImg from "../assets/images/MODELS/CREATIVE/denim.jpg"
import fabricpanelImg from "../assets/images/MODELS/CREATIVE/fabric-panel-board.jpg"
import recycledFramesImg from "../assets/images/MODELS/CREATIVE/Recycled frames.jpg"
import textTileLamp from "../assets/images/MODELS/CREATIVE/Textile Lamp and Textile coaster.jpg"

import chairImg from "../assets/images/MODELS/FURNITURES/Textile waste chair 01.jpg"
import chair2Img from "../assets/images/MODELS/FURNITURES/Textile waste chair 02.jpg"
import coffeeTableImg from "../assets/images/MODELS/FURNITURES/textile waste coffee table.jpg"
import stoolImg from "../assets/images/MODELS/FURNITURES/Textile waste stool.jpg"
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

  const collectionNetwork = [
    { 
      name: "Metro Collection", 
      image: metroCollectionImg,
      desc: "this is desciption"
    },   
    { 
      name: "Metro Collection", 
      image: metroCollection2Img,
      desc: "this is desciption"
    },
      { 
        name: "Textile Metro Collection", 
        image: textTileMetroCollectionImg,
      desc: "this is desciption"
    },
    { 
      name: "Textile Metro Networking", 
      image: textTileMetroNetworkImg,
      desc: "this is desciption"
    },  { 
      name: "Typical Textile", 
      image: typicalTextileCollectionImg,
      desc: "Typical "
    },
  ];

  const creative = [
    { 
      name: "Fabric Panel Board", 
      image: fabricpanelImg,
      desc: "this is desciption"
    },   
    { 
      name: "Denims", 
      image: denimImg,
      desc: "this is desciption"
    }, 
    { 
      name: "Recycled Frames", 
      image: recycledFramesImg,
      desc: "this is desciption"
    }, 
    { 
      name: "Texttile Lamp & Coaster", 
      image: textTileLamp,
      desc: "this is desciption"
    }, 
  ]

  const furniture = [
    {
      name: "Chair", 
      image: chairImg,
      desc: "this is desciption"
    },
    {
      name: "Chair", 
      image: chair2Img,
      desc: "this is desciption"
    },
    {
      name: "Coffee Table", 
      image: coffeeTableImg,
      desc: "this is desciption"
    },
    {
      name: "Stool", 
      image: stoolImg,
      desc: "this is desciption"
    }

  ]
  const Section = ({ title, text, imageList }) => (
    <>
        <div className="w-full border-t border-gray-300 my-8"></div>
        <div className="flex justify-start flex-col items-start py-4 transition-opacity duration-1000">
        <div className="container flex flex-col font-bold items-start">
            <h3 className="text-black text-4xl text-left">{title}</h3>
            <p className="text-black text-justify text-l">{text}</p>
        </div>
        <div className="w-full">
            <div className="w-full text-left">
                <ImagesCarousel imageList={imageList} />
            </div>
        </div>
    </div>
  </>
    
);

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
      <Section
            title="Collection Network"
            text="The collection network is an innovative system designed to streamline the gathering of textile waste in Newcastle upon Tyne, ensuring efficient transportation to our recycling center. This network includes strategically placed collection boxes across the city, making it convenient for residents to participate in sustainable practices. By integrating these collection points into everyday locations such as metro stations, student accommodations, retail shops, and bus stations, we aim to create a seamless and engaging experience for the community, promoting awareness and active participation in textile recycling."
            imageList={collectionNetwork}
        />

        <Section
            title="Prototype Interactive Models"
            text="Our interactive prototype models, located at metro stations and residential areas, feature collection boxes accompanied by seating, swings, bookshelves, and interactive screens. These installations serve not only as functional collection points but also as educational hubs, providing information about the global textile waste crisis and the recycling process, thereby engaging and educating the public in a dynamic environment."
            imageList={creative}
        />

        <Section
            title="Working Collection Box Model"
            text="The typical working collection box model is designed to facilitate easy disposal of old clothes and textiles. Equipped with a weighing mechanism, these boxes incentivize participation by offering coupons or tickets for metro rides and retail shopping based on the weight of the deposited items. This model promotes active involvement from the community by rewarding sustainable behavior."
            imageList={furniture}
        />

    </>
  )
}

export default Models;
