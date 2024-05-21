import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import BurgerMenu from '../../assets/svg/BurgerMenu'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  // Effect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav className={`shadow-lg fixed top-0 w-full z-29 bg-white ${visible ? '' : 'hidden'}`}>
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
