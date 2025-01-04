import React from "react";
import "./StoryImages.css";
import stories1 from "../../Assets/SuccesStory.webp";
import stories3 from "../../Assets/SuccesStory1.webp";
import stories4 from "../../Assets/SuccesStory2.jpg";
import stories5 from "../../Assets/SuccesStory3.jpg";
import stories6 from "../../Assets/SuccesStory4.jpg";
import stories7 from "../../Assets/SuccesStory5.jpg";
import stories8 from "../../Assets/SuccesStory6.jpg";
import stories9 from "../../Assets/SuccesStory7.jpg";

const StoryImages = () => {
  return (
    <>
      <div className="container-fluid bg-pink">
        <div className="album">
          <div className="Heading">
            <h2>Success Stories</h2>
          </div>
          <div className="responsive-container-block bg">
            <div className="responsive-container-block img-cont">
              <img className="img" src={stories1} alt="Success" />
              <img className="img" src={stories3} alt="Success" />
              <img className="img img-last" src={stories4} alt="Success" />
            </div>
            <div className="responsive-container-block img-cont">
              <img className="img img-big" src={stories5} alt="Success" />
              <img
                className="img img-big img-last"
                src={stories6}
                alt="Success"
              />
            </div>
            <div className="responsive-container-block img-cont">
              <img className="img" src={stories7} alt="Success" />
              <img className="img" src={stories8} alt="Success" />
              <img className="img" src={stories9} alt="Success" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryImages;
