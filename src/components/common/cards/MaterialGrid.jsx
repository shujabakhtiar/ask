import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import img1 from "../../../assets/images/materials/CLAY+DRY TEXTILE TILE.jpg";
import img2 from "../../../assets/images/materials/CONCRETE + TEXTILE.jpg";

const photos = [
    { name: "CLAY+DRY TEXTILE TILE", image: img1 },
    { name: "CONCRETE + TEXTILE", image: img2 },
    // Add other images with their names here
];

const PhotoGrid = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (photo) => {
        setSelectedImage(photo.image);
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div key={index} className="relative overflow-visible rounded-lg shadow-lg w-full h-full cursor-pointer flex flex-col justify-center items-center hover:shadow-xl" onClick={() => openModal(photo)}>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20"></div>
                        <img src={photo.image} alt={photo.name} className="w-full h-full object-cover transition-transform duration-200 transform hover:scale-125 cursor-pointer rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-60 text-white text-center rounded-b-lg">
                            <span className="text-sm">{photo.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Dialog visible={visible} onHide={onHide} maximizable style={{ width: '50vw' }}>
                <img src={selectedImage} alt="Selected Image" style={{ width: '100%' }} />
                <div className="p-d-flex p-jc-end">
                    <Button label="Close" icon="pi pi-times" onClick={onHide} />
                </div>
            </Dialog>
        </>
    );
};

const MaterialImagesGrid = () => (
    <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold text-center my-8">Photo Gallery</h1>
        <PhotoGrid />
    </div>
);

export default MaterialImagesGrid;
