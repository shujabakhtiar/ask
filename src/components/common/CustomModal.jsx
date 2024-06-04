import React from 'react';
import PropTypes from 'prop-types';

const CustomModal = ({ visible, onHide, children }) => {
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
        display: visible ? 'block' : 'none',
    };

    const backdropStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9998,
        display: visible ? 'block' : 'none'
    };

    // Check if the device is a mobile device
    const isMobile = window.innerWidth <= 767;

    // Apply full-screen height and width on mobile devices
    if (isMobile) {
        modalStyle.height = '100vh';
        modalStyle.width = '100vw';
        modalStyle.top = 0;
        modalStyle.left = 0;
        modalStyle.transform = 'none';
    }

    return (
        <>
            <div style={backdropStyle} onClick={onHide}></div>
            <div style={modalStyle}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    width: isMobile ? '100%' : 'auto', // Set width to 100% on mobile
                    maxWidth: isMobile ? '100%' : 'auto', // Set max width to 100% on mobile
                }}>
                    {children}
                </div>
            </div>
        </>
    );
};

CustomModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default CustomModal;
