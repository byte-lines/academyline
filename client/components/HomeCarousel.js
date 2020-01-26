import React, { useState, useEffect, useRef } from 'react';

const HomeCarousel = props => {
  const [index, setIndex] = useState(0);
  const callback = useRef();

  const increment = () => {
    setIndex((index + 1) % 3);
  };

  callback.current = increment;

  useEffect(() => {
    const interval = setInterval(() => {
      callback.current();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const { imageUrls } = props;

  const urls = [];
  let temp = [];
  imageUrls.forEach((url, i) => {
    temp.push(url);

    if ((i + 1) % 3 === 0 || i === imageUrls.length - 1) {
      urls.push(temp);
      temp = [];
    }
  });

  return (
    <div id="desktop-carousel">
      <h1 id="welcome-heading" className="home-column">
        OSCARS '19
      </h1>
      {urls.map((urlSet, setNum) => {
        return (
          <div className="image-container" key={setNum}>
            {urlSet.map((url, i) => {
              return (
                <img
                  key={url}
                  src={url}
                  className={
                    i === index
                      ? 'center'
                      : i === (index + 1) % 3
                      ? 'moved'
                      : 'right'
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HomeCarousel;
