import React, { useState, useEffect, useRef } from 'react';

const HomeCarousel = props => {
  const { imageUrls } = props;

  const [index, setIndex] = useState(0);
  const callback = useRef();

  const increment = () => {
    setIndex((index + 1) % imageUrls.length);
  };

  callback.current = increment;

  useEffect(() => {
    const interval = setInterval(() => {
      callback.current();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="desktop-carousel">
      <div className="image-container">
        {imageUrls.map((url, i) => {
          return (
            <img
              key={url}
              src={url}
              className={
                i === index
                  ? 'center'
                  : i === (index + 1) % imageUrls.length
                  ? 'moved'
                  : 'right'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeCarousel;
