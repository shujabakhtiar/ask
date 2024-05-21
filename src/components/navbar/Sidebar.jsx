import React, { useEffect } from 'react';
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleMouseEnter = () => {
      const sidebar = document.getElementById('sidebar-bg');
      if (sidebar) {
        sidebar.classList.add('orange-background');
      }
    };

    const handleMouseLeave = () => {
      const sidebar = document.getElementById('sidebar-bg');
      if (sidebar) {
        sidebar.classList.remove('orange-background');
      }
    };

    const links = document.querySelectorAll('.navLink a');

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-hidden z-30">
          <div className="absolute inset-0 opacity-50" onClick={handleOverlayClick}></div>
          <div id="sidebar-bg" className="fixed inset-y-0 right-0 w-full nav-bg-1 overflow-y-auto transition-transform duration-300 ease-in-out transform flex justify-end">
            <div className="p-4">
              <ul className='navLink p-20'>
                <li><a href="#" className="block text-white px-4 py-2 rounded hover:underline">Link 1</a></li>
                <li><a href="#" className="block text-white px-4 py-2 rounded hover:underline">Link 2</a></li>
                <li><a href="#" className="block text-white px-4 py-2 rounded hover:underline">Link 3</a></li>
                {/* Add more links here */}
              </ul>
            </div>
            <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-white hover:text-gray-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
