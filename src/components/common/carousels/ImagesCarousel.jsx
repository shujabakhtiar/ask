import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import CustomModal from '../CustomModal';
import { WideImage } from '../WideImage';
import { Button } from 'primereact/button';

export const ImagesCarousel = ({ imageList }) => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const projectTemplate = (project) => {
        return (
            <div onClick={() => openDialog(project.image)}>
                <WideImage image={project.image} name={project.image} />
            </div>
        );
    };

    const openDialog = (image) => {
        setSelectedImage(image);
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
        setSelectedImage(null);
    };

    return (
        <div className="card">
            <Carousel 
                value={imageList} 
                numVisible={3} 
                numScroll={2} 
                responsiveOptions={responsiveOptions} 
                itemTemplate={projectTemplate} 
                circular
            />
            <CustomModal visible={visible} onHide={onHide}>
                <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
                <div className="p-d-flex p-jc-end">
                    <Button label="Close" icon="pi pi-times" onClick={onHide} />
                </div>
            </CustomModal>
        </div>
    );
};
