import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './Sidebar';
import BurgerMenu from '../../assets/svg/BurgerMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll event
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  // Effect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav className={`shadow-lg h-28 flex items-center fixed top-0 w-full z-29 bg-white ${visible ? '' : 'hidden'}`}>
        <div className="container mx-auto px-4 bg-white">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center font-NeueHaasGrostekBold text-xl" style={{FontFace:"brFirma"}}>
                ASK
            </div>
            {/* Toggle Sidebar Button */}
            <button onClick={toggleSidebar} className="block p-4 focus:outline-none">
              <BurgerMenu/>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
    </>
  );
};

export default Navbar;
