import React, { useState, useEffect } from 'react';
const ScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    if(screenSize.width>600){
      
      return (
        <div className='col-md-12 bg-dark text-light'>
        Short Screen
            <p>Screen width: {screenSize.width}</p>
          <p>Screen height: {screenSize.height}</p>
        </div>
      )
    }
    else{
            
      return (
        <div className='col-md-12 bg-success text-light pt-3'>
            <p>Screen width: {screenSize.width}</p>
          <p>Screen height: {screenSize.height}</p>
        </div>
      )
    }
}

export default ScreenSize