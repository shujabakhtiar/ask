import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const MaterialCard = ({ name, image }) => {
    const footer = (
        <button className="hollow-button">View</button>
    );
    const header = (
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    );
    const title = (
        <div className='flex justify-center items-center mt-1 text-xl font-bold p-3'>
                {name}
        </div>
    );
    return (
        <Card title={title} header={header} className="md:w-25rem">
        </Card>
    );
};

export default MaterialCard;
