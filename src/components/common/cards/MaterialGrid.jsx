import React, { useState } from 'react';
import { Button } from 'primereact/button';
import MaterialCard from './MaterialCard'; // Import the MaterialCard component
import CustomModal from '../CustomModal'; // Import the CustomModal component
import clayDryImg from "../../../assets/images/materials/CLAY+DRY TEXTILE TILE.jpg";
import claryWetImg from "../../../assets/images/materials/CLAY+WET TEXTILE.jpg";
import concreteImg from "../../../assets/images/materials/CONCRETE + TEXTILE.jpg"
import hempLimeTextileImg from "../../../assets/images/materials/HEMP+LIME+TEXTILE.jpg"
import limeTextile from "../../../assets/images/materials/LIME+TEXTILE.jpg"
import mycellum from "../../../assets/images/materials/MYCELLIUM+TEXTILE.jpg"
import plasterImg from "../../../assets/images/materials/PLASTER+TEXTILE.jpg"
import resinTextileImg from "../../../assets/images/materials/RESIN+TEXTILE (1).jpg"
import resinTileImg from "../../../assets/images/materials/RESIN+TEXTILE TILE.jpg"
import sandLimeImg from "../../../assets/images/materials/SAND+LIME+TEXTILE.jpg"
import textileConcrete from "../../../assets/images/materials/TEXTILE+CONCRETE.jpg"
import constarch1Img from "../../../assets/images/materials/TEXTILE+CORNSTARCH.jpg"
import constarchTileImg from "../../../assets/images/materials/TEXTILE+CORNSTARCH TILE.jpg"
import constarch21Img from "../../../assets/images/materials/TEXTILE+CORNSTARCH (2).jpg"



const photos = [
    { 
        name: "CLAY-DRY TEXTILE",
        image: clayDryImg,
        desc:"Made from a blend of clay and shredded textile waste in a 1:2 ratio, this versatile material can be molded into various shapes and is suitable for roof cladding, floor tiles, and wall cladding."
    },
    { 
        name: "Wet Clay", 
        image: claryWetImg,
        desc : "Made from a blend of clay and shredded textile waste in a 1:2 ratio, this versatile material can be molded into various shapes and is suitable for roof cladding, floor tiles, and wall cladding.        "
    },
    { 
        name: "CONCRETE + TEXTILE", image: concreteImg },
    { 
        name: "CONCRETE + TEXTILE", image: hempLimeTextileImg,
        desc: "This insulating material combines hemp, lime, and textile waste in a 1:1:2 ratio. It is ideal for use in insulating walls and wall cladding, providing both thermal efficiency and sustainability."
    },
    { 
        name: "Lime + TEXTILE", 
        image: limeTextile ,
        desc: "With a 1:2 ratio of lime to textile waste, this material is effective for wall cladding, offering a durable and eco-friendly alternative to conventional cladding materials."

    },
    { 
        name: "Mycellium", 
        image: mycellum, 
        desc:"This innovative material is made from mycelium, coffee grounds, wheat grains, and textile waste in a 1:2:2:4 ratio. It has excellent insulation properties, making it suitable for use in building insulation." 
    },
    { 
        name: "PLASTER + TEXTILE", 
        image: plasterImg,
        desc: "Combining plaster and textile waste in a 1:2 ratio, this material can be applied directly to walls and hardens quickly, providing a durable and smooth finish."
    },
    { 
        name: "RESIN + TEXTILE", 
        image: resinTextileImg, 
        desc :"With a 1:2 ratio of resin to textile waste, this material is exceptionally hard and suitable for toughened applications, including durable surfaces and structural components."
     },
    { 
        name: "RESIN + TEXTILE", 
        image: resinTileImg,
        desc : "With a 1:2 ratio of resin to textile waste, this material is exceptionally hard and suitable for toughened applications, including durable surfaces and structural components."
    },
    { 
        name: "SAND + lIME + TEXTILE", 
        image: sandLimeImg,
        desc: "This material, made from sand, lime, and textile waste in a 1:1:2 ratio, is suitable for wall construction, offering strength and sustainability." 
    },
    { 
        name: "CONCRETE + TEXTILE", 
        image: textileConcrete,
        desc: "Composed of cement, sand, and textile waste in a 1:2:3 ratio, this material is robust and suitable for structural uses and wall construction, offering a sustainable alternative to traditional concrete."
    },
    { 
        name: "CONCRETE + TEXTILE", 
        image: constarch1Img, 
        desc: "Mixing shredded textile with corn starch in a 2:1 ratio, this organic binder creates a moldable material that can be used for both internal and external applications, depending on the properties of the fabric." 
    },
    {   name: "CORNSTARCH + TEXTILE", 
        image: constarchTileImg,
        desc: "Mixing shredded textile with corn starch in a 2:1 ratio, this organic binder creates a moldable material that can be used for both internal and external applications, depending on the properties of the fabric."  
    },    
    {   name: "CORNSTARCH + TEXTILE", 
        image: constarch21Img,
        desc: "Mixing shredded textile with corn starch in a 2:1 ratio, this organic binder creates a moldable material that can be used for both internal and external applications, depending on the properties of the fabric."  
    },
    // Add other images with their names here
];

const PhotoGrid = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState({});
    const [desc,setDescription] = useState("")
    const openModal = (photo) => {
        setSelectedImage(photo);
        setDescription(photo.desc)
        setVisible(true);
    };

    const onHide = () => {
        console.log("heyy")
        setVisible(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div key={index} className="relative overflow-visible rounded-lg shadow-lg w-full h-full cursor-pointer flex flex-col justify-center items-center hover:shadow-xl" onClick={() => openModal(photo)}>
                        <div className="absolute inset-0"></div>
                        <MaterialCard name={photo.name} image={photo.image} />
                    </div>
                ))}
            </div>
            <CustomModal visible={visible} onHide={onHide} >
                <div className='w-full flex flex-col'>
                    <div className='flex justify-center'>
                         <img src={selectedImage.image} alt="Selected" className='w-full h-3/5 rounded-tl-lg rounded-tr-lg'/>
                     </div>
                    <div className='flex flex-col py-3 px-4'>
                        <p className='text-left text-xl font-bold'>
                            {selectedImage.name}
                        </p>
                        <p className='text-left'>
                            {selectedImage.desc}
                         </p>
                     <div className="flex justify-end">
                      <button onClick={onHide} className='hollow-button'>Close</button>
                     </div>
                    </div>
                </div>
                
            </CustomModal>
        </>
    );
};

const MaterialImagesGrid = () => (
    <div className='flex flex-col justify-center'>
        <h1 className="text-4xl font-bold text-left m-8">Materials and their compositions</h1>
        <PhotoGrid />
    </div>
);

export default MaterialImagesGrid;
