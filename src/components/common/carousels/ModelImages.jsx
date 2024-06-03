import React from 'react';
import { Carousel } from 'primereact/carousel';
import model1 from "../../../assets/images/MODELS/COLLECTION NETWORK/metro-collection-1.jpg"
import model2 from "../../../assets/images/MODELS/CREATIVE/denim.jpg"
import model3 from "../../../assets/images/MODELS/COLLECTION NETWORK/metro-collection-2.jpg"
import { Link } from 'react-router-dom';
import model4 from "../../../assets/images/MODELS/CREATIVE/fabric-panel-board.jpg"
import { WideImage } from '../WideImage';

export const ModelImages = () => {
    const images = [
        {name:model1,image:model1},
        {name:model2,image:model2},
        {name:model3,image:model3},
        {name:model4,image:model4},
    ];

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
            <Link to="/models">
            <WideImage image={project.image} name={project.image} />
             </Link>  
        );
    };
    return (
        <div className="card">
            <Carousel 
                value={images} 
                numVisible={3} 
                numScroll={2} 
                responsiveOptions={responsiveOptions} 
                itemTemplate={projectTemplate} 
                circular
            />
        </div>
    );
};
