"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "/img/common/1.jpg",
  },
  {
    url: "/img/common/2.jpg",
  },
  //Second image url
  {
    url: "/img/common/3.jpg",
  },
  //Third image url
  {
    url: "/img/common/4.jpg",
  },

  //Fourth image url

  {
    url: "/img/common/5.jpg",
  },
];
const Scavenger = () => {
  return (
    <div className="parent">
      <Carousel

        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider mx-1" key={index}>
              <img
                className="min-h-96 object-cover"
                src={imageUrl.url}
                alt="movie"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Scavenger;
