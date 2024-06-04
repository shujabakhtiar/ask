import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import CustomModal from '../CustomModal';
import { WideImage } from '../WideImage';

export const ImagesCarousel = ({ imageList }) => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState({});

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
            <div onClick={() => openDialog(project)}>
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
          
            <CustomModal visible={visible} onHide={onHide} >
                <div className='w-full flex flex-col'>
                    <div className='flex justify-center'>
                         <img src={selectedImage.image} alt="Selected" className='w-full h-3/5 rounded-tl-lg rounded-tr-lg max-h-img object-scale-down home-img'/>
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
        </div>
    );
};
