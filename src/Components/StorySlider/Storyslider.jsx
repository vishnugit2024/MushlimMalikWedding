import React from "react";
import "./Slider.css";
import Slider from "react-slick";

import Couple from "../../Assets/FoundLove.jpg";
import Couple1 from "../../Assets/FoundLove1.jpg";
import Couple2 from "../../Assets/FoundLove2.jpg";
import Couple3 from "../../Assets/FoundLove3.jpg";
import Couple4 from "../../Assets/FoundLove4.jpg";
import Couple5 from "../../Assets/FoundLove5.jpg";
import stories1 from "../../Assets/SuccesStory.webp";
import { Link } from "react-router-dom";

const Storyslider = () => {
  const settings = {
    infinite: true, // Infinite looping
    speed: 1000, // Transition speed
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the speed of auto slide in milliseconds (2000ms = 2s)
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 images on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 image on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: stories1, alt: "Image 1", text: "Aayan & Aleena" },
    { src: Couple, alt: "Image 2", text: "Faizan & Fatima" },
    { src: Couple1, alt: "Image 3", text: "Asif & Aisha" },
    { src: Couple2, alt: "Image 4", text: "Rizwan & Noora" },
    { src: Couple3, alt: "Image 5", text: "Farhan & Sana" },
    { src: Couple4, alt: "Image 5", text: "Abrar & Ziya" },
    { src: Couple5, alt: "Image 5", text: "Sameer & Naima" },
  ];

  return (
    <>
      <div className="container">
        <div className="slider-container">
          <div className="slider-heading">
            <h2>Couples Who Found Love</h2>
          </div>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <div className="image-container">
                  <img src={image.src} alt={image.alt} />
                  <div className="image-text">{image.text}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="button-container">
          <Link to="/ourstory">
            <button className="viewall-btn">View All</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Storyslider;
