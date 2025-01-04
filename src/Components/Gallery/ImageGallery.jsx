import React from "react";
import "./gallery.css";
import Slider from "react-slick";
import Galleryslider1 from "../../Assets/Galleryslider1.jpg";
import { Link } from "react-router-dom";
import Galleryslider2 from "../../Assets/Galleryslider4.webp";
import Galleryslider3 from "../../Assets/SuccesStory3.jpg";
import Galleryslider4 from "../../Assets/FoundLove4.jpg";
import Galleryslider5 from "../../Assets/StoryTelling1.jpg";
import Galleryslider6 from "../../Assets/SuccesStory4.jpg";
import Galleryslider7 from "../../Assets/SuccesStory6.jpg";

const ImageGallery = () => {
  const Gallerysettings = {
    infinite: true, // Infinite looping
    speed: 1000, // Transition speed
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the speed of auto slide in milliseconds (2000ms = 2s)
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
    { src: Galleryslider1, alt: "Image 1" },
    { src: Galleryslider2, alt: "Image 2" },
    { src: Galleryslider3, alt: "Image 3" },
    { src: Galleryslider4, alt: "Image 4" },
    { src: Galleryslider5, alt: "Image 5" },
    { src: Galleryslider6, alt: "Image 5" },
    { src: Galleryslider7, alt: "Image 5" },
  ];

  return (
    <>
      <div className="container-fluid bg-pink">
        <div className="container">
          <div className="Gallery-slider-container">
            <div className="Heading">
              <h2>Gallery</h2>
            </div>
            <Slider {...Gallerysettings}>
              {images.map((image, index) => (
                <div key={index} className="Gallery-slider-item">
                  <div className="Gallery-image-container">
                    <img src={image.src} alt={image.alt} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/gallery">
          <button className="viewall-btn">View More</button>
        </Link>
      </div>
    </>
  );
};

export default ImageGallery;
