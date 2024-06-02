import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 h-44 flex items-center">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold">ASK</span>
                </div>
                <div className='text-left'>
                    <h4 className="text-lg font-bold">Get in Touch</h4>
                    <p className="mt-1">Email: contact@yourbrand.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
