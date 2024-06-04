import React, { useState } from 'react';
import { ImagesCarousel } from '../components/common/carousels/ImagesCarousel';
import metroCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-1.jpg"
import metroCollection2Img from "../assets/images/MODELS/COLLECTION NETWORK/metro-collection-2.jpg"
import textTileMetroCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/textile-metro-collection-network.jpg"
import textTileMetroNetworkImg from "../assets/images/MODELS/COLLECTION NETWORK/texttile-metro-network.jpg"
import typicalTextileCollectionImg from "../assets/images/MODELS/COLLECTION NETWORK/typical-textile.jpg"

import denimImg from "../assets/images/MODELS/CREATIVE/denim.jpg"
import fabricpanelImg from "../assets/images/MODELS/CREATIVE/fabric-panel-board.jpg"
import recycledFramesImg from "../assets/images/MODELS/CREATIVE/Recycledframes.jpg"
import textTileLamp from "../assets/images/MODELS/CREATIVE/TextileLampandTextilecoaster.jpg"

import chairImg from "../assets/images/MODELS/FURNITURES/Textilewastechair01.jpg"
import chair2Img from "../assets/images/MODELS/FURNITURES/Textilewastechair02.jpg"
import coffeeTableImg from "../assets/images/MODELS/FURNITURES/textilewastecoffeetable.jpg"
import stoolImg from "../assets/images/MODELS/FURNITURES/Textilewastestool.jpg"
import clothChair from "../assets/images/MODELS/FURNITURES/recycleTextileChair.jpg"

import buildingSectionImg from "../assets/images/MODELS/New folder/BuildingSection.jpg"
import partitionWallpanelImg from "../assets/images/MODELS/New folder/Partitionwallpanel.jpg"
import partitionWall1panel1Img from "../assets/images/MODELS/New folder/Partitionwallpanel01.jpg"
import partitionWall2panel2Img from "../assets/images/MODELS/New folder/partitionwallpanel02.jpg"
import videoDesktop from "../assets/modelsdesktop.mp4"
import videoMobile from "../assets/modelsmobile.mp4"
export const Models = () => {
  const [showDetails, setShowDetails] = useState(false);



  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

  const collectionNetwork = [
    { 
      name: "Prototype Interactive Models", 
      image: metroCollectionImg,
      desc: "Our interactive prototype models, located at metro stations and residential areas, feature collection boxes accompanied by seating, swings, bookshelves, and interactive screens. These installations serve not only as functional collection points but also as educational hubs, providing information about the global textile waste crisis and the recycling process, thereby engaging and educating the public in a dynamic environment."
    },   
    { 
      name: "Prototype Interactive Models", 
      image: metroCollection2Img,
      desc: "Our interactive prototype models, located at metro stations and residential areas, feature collection boxes accompanied by seating, swings, bookshelves, and interactive screens. These installations serve not only as functional collection points but also as educational hubs, providing information about the global textile waste crisis and the recycling process, thereby engaging and educating the public in a dynamic environment."
    },
      { 
        name: "Rastered Map of Newcastle City Centre", 
        image: textTileMetroCollectionImg,
      desc: "Focusing on the city center, this rastered map pinpoints the exact locations of collection boxes within residential areas, student accommodations, and retail shops. The map demonstrates our comprehensive approach to integrating textile waste collection into the daily lives of residents, making sustainable practices an easy and integral part of the communitys routine."
    },
    { 
      name: "Rastered Map of Newcastle upon Tyne", 
      image: textTileMetroNetworkImg,
      desc: "This detailed rastered map illustrates the extensive metro network of Newcastle upon Tyne, highlighting the connectivity and accessibility of our collection points. By visualizing the metro lines and stations, the map underscores the strategic placement of collection boxes within the public transit system, ensuring convenient drop-off locations for textile waste."
    },  { 
      name: "Working Collection Box Model", 
      image: typicalTextileCollectionImg,
      desc: "The typical working collection box model is designed to facilitate easy disposal of old clothes and textiles. Equipped with a weighing mechanism, these boxes incentivize participation by offering coupons or tickets for metro rides and retail shopping based on the weight of the deposited items. This model promotes active involvement from the community by rewarding sustainable behavior."
    },
  ];

  const creative = [
    { 
      name: "Vibrant Fabric Board:", 
      image: fabricpanelImg,
      desc: "The fabric board is composed of various types of fabrics, showcasing a range of vibrant colors and patterns. This visually striking piece highlights the diversity and beauty of textile materials, demonstrating how waste fabrics can be artfully arranged to create a lively and engaging decor element."
    },   
    { 
      name: "Recycled Denim Pocket Frames:", 
      image: denimImg,
      desc: "These frames are crafted from wooden structures, featuring recycled denim pockets from old jeans. Designed as decor pieces, they combine functionality with aesthetic appeal, providing a stylish way to repurpose denim while adding a touch of creativity to any room."
    }, 
    { 
      name: "Logo and Writing Frames:", 
      image: recycledFramesImg,
      desc: "This project involves extracting logos and writings from used clothes and arranging them into framed art pieces. These frames serve as unique decor items, celebrating the stories and histories embedded in each garment, turning textile waste into a meaningful and artistic display"
    }, 
    { 
      name: "Textile Waste and Cornstarch Lamp Cover and Coaster:", 
      image: textTileLamp,
      desc: "This project features a focus lamp cover and a coaster made from a blend of textile waste and cornstarch. These items exemplify innovative material use, transforming textile scraps into practical and attractive household items. The lamp cover and coaster not only add a unique touch to interior spaces but also embody the principles of sustainability and creative reuse."
    }, 
  ]

  const furniture = [
    {
      name: "Small Scale Compressed Textile Seating Model", 
      image: chairImg,
      desc: "This model explores the use of compression techniques to repurpose clothes into seating. By layering and compressing fabrics, we create a compact and resilient seating structure, showcasing an innovative method of transforming textile waste into functional furniture."
    },
    {
      name: "Small Scale Woven Chair Model:", 
      image: chair2Img,
      desc: "This model illustrates how textiles can be directly reused to create furniture through weaving techniques. By interlacing strips of fabric, we showcase the potential of textile waste to form a sturdy and visually appealing chair, emphasizing both craftsmanship and sustainability."
    },
    {
      name: "Coffee Table", 
      image: coffeeTableImg,
      desc: "This coffee table combines shredded textiles with a concrete leg, and the tabletop is a blend of concrete, textile, and resin. The design showcases the integration of textile waste into structural elements, resulting in a unique and sustainable furniture piece that merges functionality with creative reuse."    },
    {
      name: "Large Scale Compressed Textile Stool (1:1)", 
      image: stoolImg,
      desc: "The full-scale stool utilizes the same layering and compression techniques as the small-scale model, demonstrating the feasibility of this method in creating durable seating solutions. This 1:1 scale piece highlights the potential for large-scale application of compressed textiles in furniture design."
    },
    {
      name: "Large Scale Woven Chair Model (1:1):", 
      image: clothChair,
      desc: "The full-scale version of the woven chair demonstrates the practicality and durability of using discarded clothes in furniture making. This 1:1 scale model highlights the strength and functionality of woven textile furniture, providing a tangible example of sustainable design in action."
    }

  ]

  const architectureInnovations =[
    {
      name:"Shredded Textile Waste Partition Panel:",
      image:partitionWall1panel1Img,
      desc:"This model features a partition wall panel created by mixing shredded textile waste with cornstarch, framed with wooden supports. The innovative combination of materials not only provides structural integrity but also offers an eco-friendly solution for partitioning spaces, emphasizing the practical application of textile waste in architecture."
    },
    {
      name:"Shredded Denim Waste Partition Panel::",
      image:partitionWallpanelImg,
      desc:"A different design approach to partition walls, this model utilizes shredded denim waste combined with cornstarch. This variation demonstrates the versatility of textile waste, showcasing how different types of fabric can be repurposed into functional and aesthetically distinct architectural elements."
    },
    {
      name:"Shredded Denim Waste Partition Panel::",
      image:partitionWall2panel2Img,
      desc:"A different design approach to partition walls, this model utilizes shredded denim waste combined with cornstarch. This variation demonstrates the versatility of textile waste, showcasing how different types of fabric can be repurposed into functional and aesthetically distinct architectural elements."
    },
    {
      name:"Building Section Model",
      image:buildingSectionImg,
      desc:"The typical building section model illustrates the comprehensive use of our developed materials within a building's structure. Exterior walls are clad with clay and textile tiles, as well as hemp, lime, and textile tiles, while interior walls feature textile and cornstarch panels. The flooring incorporates a blend of clay and textile. This model exemplifies our commitment to not only experimenting with sustainable materials but also advocating for their practical implementation in the construction industry, showcasing a holistic approach to eco-friendly building practices."
    },
  ]
  const Section = ({ title, text, imageList }) => (
    <>
        <div className="border-t border-gray-300 my-8"></div>

           <div 
                    className={`flex justify-start flex-col items-start py-4 mt-4 transition-opacity duration-1000`}
            >
                <div className="container flex flex-col font-bold items-start">
            <h3 className="text-black text-4xl text-left">{title}</h3>
            <p className="text-black text-justify text-l">{text}</p>
        </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                    <ImagesCarousel imageList={imageList} />
                    </div>
                </div>
            </div>
  </>
    
);

  return (
    <>
       <div className="full-container relative overflow-hidden">
            <video className="hidden md:block w-full relative overflow-hidden opacity-70" autoPlay muted loop>
                <source src={videoDesktop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video className="md:hidden  h-full w-full relative overflow-hidden opacity-70" autoPlay muted loop>
                <source src={videoMobile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Semi-transparent black layer */}

            <div className="left-10 md:left-20 absolute h-20 text-4xl font-bold text-white text-left">
                <span className='text-5xl text-left'>Models</span> <br />
            </div>
        </div>
      <div className='flex justify-center items-center'>
        <div className='container md:h-5/6 flex flex-col md:flex md:flex-row md:justify-between'>
          <div className=''>
                        {/**<StatusCard items={infoItems} /> **/}
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
            title="Creative"
            text="The creative section showcases our innovative approach to repurposing textile waste into unique, functional, and aesthetically pleasing items. Through these creative projects, we demonstrate the potential of discarded textiles to be transformed into decor and utility pieces that not only add value to our living spaces but also promote sustainability and awareness about textile waste."
             imageList={creative}
        />

        <Section
            title="Furniture Section"
            text="The furniture section highlights our innovative efforts to repurpose textile waste into functional and stylish furniture pieces. Through various techniques such as weaving, compression, and material blending, we demonstrate how discarded textiles can be transformed into durable and aesthetically pleasing furniture. This collection not only showcases the versatility of textile waste but also promotes sustainable design practices."
            imageList={furniture}
        />
         <Section
            title="Architectural Innovations"
            text="The Architectural Innovations section showcases how our research and material experiments extend beyond small-scale applications, demonstrating their potential in real-world architectural contexts. By integrating textile waste into building elements, we highlight the feasibility and aesthetic appeal of sustainable materials in construction and interior design.            "
            imageList={architectureInnovations}
        />

    </>
  )
}

export default Models;
