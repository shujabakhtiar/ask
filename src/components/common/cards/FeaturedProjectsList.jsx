import React from 'react';
import { Carousel } from 'primereact/carousel';

export const FeaturedProjectsList = () => {
    const projects = ['A', 'B', 'C','d','e'];

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
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <h3>{project}</h3>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel 
                value={projects} 
                numVisible={3} 
                numScroll={2} 
                responsiveOptions={responsiveOptions} 
                itemTemplate={projectTemplate} 
                circular
            />
        </div>
    );
};
