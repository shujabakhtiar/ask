import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white py-6 md:h-44 flex items-center bg-dark">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold">ASK</span>
                </div>
                <div className='text-left'>
                    Sangeetha Nagaraj:
                    <p className="mt-1">Email: s.nagaraj2@newcastle.ac.uk</p>
                </div>
                <div className='text-left'>
                    Kaviya:
                    <p className="mt-1">Email: k.chenthil-kumar2@newcastle.ac.uk</p>
                </div>
                <div className='text-left'>
                   Aditi Golecha:
                    <p className="mt-1">Email: a.r.golecha2@newcastle.ac.uk</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
