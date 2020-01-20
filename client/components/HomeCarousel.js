import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Carousel
      className="carousel-body"
      activeIndex={index}
      direction={direction}
      interval={3000}
      onSelect={handleSelect}
    >
      <Carousel.Item className="carousel-imgs">
        <img
          height="650"
          width="1400"
          src="https://www.kodak.com/Kodak/uploadedImages/Motion/InCamera/2019/11-November/MarriageStorySubway.jpg?n=4559"
        />
        <Carousel.Caption>
          <h1 className="carousel-caption">
            <span className="three">.</span>
            <span className="two">.</span>
            <span className="one">.</span>Marriage Story
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-imgs">
        <img
          height="650"
          width="1400"
          src="http://www.larsenonfilm.com/wp-content/uploads/2019/11/1917-review.jpg"
        />
        <Carousel.Caption>
          <h1 className="carousel-caption">
            <span className="three">.</span>
            <span className="two">.</span>
            <span className="one">.</span>1917
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-imgs">
        <img
          height="650"
          width="1400"
          src="https://www.motionpictures.org/wp-content/uploads/2019/11/the-irishman-netflix-TI_KS_072_rgb-1400x757.jpg"
        />
        <Carousel.Caption>
          <h1 className="carousel-caption">
            <span className="three">.</span>
            <span className="two">.</span>
            <span className="one">.</span>The Irishman
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-imgs">
        <img
          height="650"
          width="1400"
          src="https://filmschoolrejects.com/wp-content/uploads/2019/10/Joker-Call-Me.png"
        />
        <Carousel.Caption>
          <h1 className="carousel-caption">
            <span className="three">.</span>
            <span className="two">.</span>
            <span className="one">.</span>Joker
            <span className="one">.</span>
            <span className="two">.</span>
            <span className="three">.</span>
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
