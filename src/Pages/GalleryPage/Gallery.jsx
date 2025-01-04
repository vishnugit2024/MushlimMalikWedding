import React from "react";
import "./Gallery.css";
import Gallery1 from "../../Assets/Gallery5.jpg";
import Gallery2 from "../../Assets/Galleryslider2.jpg";
import Gallery3 from "../../Assets/Gallery6.jpg";
import Gallery4 from "../../Assets/Galleryslider4.webp";
import Gallery5 from "../../Assets/Galleryslider1.jpg";
import Gallery6 from "../../Assets/SuccesStory1.webp";
import Gallery7 from "../../Assets/SuccesStory2.jpg";
import Gallery8 from "../../Assets/SuccesStory3.jpg";
import Gallery9 from "../../Assets/SuccesStory4.jpg";
import Gallery10 from "../../Assets/SuccesStory5.jpg";
import Gallery11 from "../../Assets/SuccesStory6.jpg";
import Gallery12 from "../../Assets/SuccesStory7.jpg";
import Gallery13 from "../../Assets/heroimage.png";
import Gallery14 from "../../Assets/muslimbanner.webp";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryImages = [
    {
      src: Gallery1,
      alt: "Happy Client 1",
    },
    {
      src: Gallery2,
      alt: "Happy Client 2",
    },
    {
      src: Gallery3,
      alt: "Happy Client 3",
    },
    {
      src: Gallery4,
      alt: "Happy Client 4",
    },
    {
      src: Gallery5,
      alt: "Happy Client 5",
    },
    {
      src: Gallery6,
      alt: "Happy Client 6",
    },
    {
      src: Gallery7,
      alt: "Happy Client 6",
    },
    {
      src: Gallery8,
      alt: "Happy Client 6",
    },
    {
      src: Gallery9,
      alt: "Happy Client 6",
    },
    {
      src: Gallery10,
      alt: "Happy Client 6",
    },
    {
      src: Gallery11,
      alt: "Happy Client 6",
    },
    {
      src: Gallery12,
      alt: "Happy Client 6",
    },
    {
      src: Gallery13,
      alt: "Happy Client 6",
    },
    {
      src: Gallery14,
      alt: "Happy Client 6",
    },
  ];

  return (
    <>
      <section>
        <div className="page-header">
          <h2>A Glimpse of Our Happy Momentsn</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Gallery</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid py-2 gallery-section">
          <div className="row">
            <div className="Heading">
              <h2>Gallery</h2>
            </div>
          </div>
          <div className="row g-3">
          
            {galleryImages.map((image, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div className="gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
