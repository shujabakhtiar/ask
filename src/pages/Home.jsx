import React from 'react';
import { homePageTexts } from "../assets/consts/content";
import { ModelImages } from '../components/common/carousels/ModelImages';
import { MaterialImages } from '../components/common/carousels/MaterialImages';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../assets/helper/useIntersectionObserver'; // Adjust the import path accordingly
import video from "../assets/video.mp4"
import videomobile from "../assets/videomobile.mp4"

export const Home = () => {
    const [modelsRef, modelsInView] = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [quoteA, quoteAInView] = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true,
    });
    const [quoteB, quoteBInView] = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [materialsRef, materialsInView] = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <>
           <div className="full-container relative overflow-hidden">
            <video className="hidden md:block w-full relative overflow-hidden opacity-70" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video className="md:hidden  h-full w-full relative overflow-hidden opacity-70" autoPlay muted loop>
                <source src={videomobile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Semi-transparent black layer */}

            <div className="left-10 md:left-20 absolute h-20 text-4xl font-bold text-white text-left">
                <span className='text-5xl text-left'>Reweave</span> <br />
                <span className='text-2xl'>Transforming Textile Waste into Architectural Marvels</span>
            </div>
        </div>


            <div
                ref={quoteA} 
                className={`full-container flex justify-center items-center transition-opacity duration-1000 ${quoteAInView ? 'opacity-100' : 'opacity-0'}`}>
                <div className='container md:h-5/6 flex-col flex md:relative md:flex-row'>
                    <div className='md:absolute md:top-0 md:left-0 font-bold md:text-4xl quote'>
                        {homePageTexts.quotes.quote1}
                    </div>
                    <div className='md:absolute md:bottom-0 md:right-0'>
                        Image here
                    </div>
                </div>
            </div>

            <div                 
                ref={quoteB} 
                className={`full-container bg-semi-light flex justify-center items-center transition-opacity duration-1000 ${quoteBInView ? 'opacity-100' : 'opacity-0'}`}>
                <div className='container md:h-5/6 flex flex-col items-center md:flex md:flex-row md:justify-around'>
                    <div className=''>
                        Image here
                    </div>

                    <div className='md:text-4xl quote'>
                        {homePageTexts.quotes.quote2}
                    </div>
                </div>
            </div>

            <div 
                ref={modelsRef} 
                className={`flex justify-start flex-col items-start py-4 mt-4 transition-opacity duration-1000 ${modelsInView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/models" className='text-black hover:underline text-4xl'>Models</Link>
                    <Link to="/models" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <ModelImages />
                    </div>
                </div>
            </div>

            <div 
                ref={materialsRef} 
                className={`flex justify-start flex-col items-start py-4 transition-opacity duration-1000 ${materialsInView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='container flex justify-between items-center font-bold'>
                    <Link to="/materials" className='text-black hover:underline text-4xl'>Materials</Link>
                    <Link to="/materials" className='text-black hover:underline'>learn more</Link>
                </div>
                <div className='w-full'>
                    <div className='w-full text-left'>
                        <MaterialImages />
                    </div>
                </div>
            </div>
        </>
    );
};
