import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ourstory.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ImageGallery from "../../Components/Gallery/ImageGallery";
import Stroytelling from "../../Assets/StoryTelling1.jpg";
import Stroytelling1 from "../../Assets/StoryTelling2.jpg";
import Stroytelling2 from "../../Assets/StoryTelling3.jpg";

const OurStory = () => {
  useEffect(() => {
    // Reinitialize AOS after the component is mounted
    AOS.init();
    // Refresh AOS animations after navigation
    AOS.refresh();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Story | Mushlim Mushlim Mushlim Mushlim Muslim Malik Risthe</title>
        <meta name="description" content="Discover Asif and Aisha's beautiful love story, from their first meeting to their magical wedding day." />
      </Helmet>

      <section>
        <div className="page-header">
          <h2>Every Love Story is Beautiful</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Our Story</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container story-container">
          <div className="row story-row">
            <div className="Heading">
              <h2>Our Story</h2>
            </div>
            <div className="col-lg-6">
              <div className="story-img">
                <img
                  src={Stroytelling2}
                  alt="Couple Images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-telling" data-aos="zoom-in-up">
                <h2>
                  First Meet <i className="bi bi-balloon-heart"></i>
                </h2>
                <h4>
                  Asif <i className="bi bi-arrow-through-heart"></i> Aisha
                </h4>
                <p>
                  Asif and Aisha's story began on a sunny sunset when their
                  profiles matched on a popular Muslim Malik Risthe website.
                  Intrigued by Aisha's love for poetry and Asif's passion for
                  photography, they exchanged messages that turned into long,
                  meaningful conversations. After weeks of chatting and phone
                  calls, they decided to meet in person.
                </p>
              </div>
            </div>
          </div>

          <div className="row story-row">
            <div className="col-lg-6 home-story">
              <div className="story-img">
                <img
                  src={Stroytelling1}
                  alt="Couple Images"
                  data-aos="flip-up"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="story-telling" data-aos="zoom-in-up">
                <h2>Proposal Day <i className="bi bi-flower3"></i></h2>
                <h4>
                  Asif <i className="bi bi-arrow-through-heart"></i> Aisha
                </h4>

                <p>
                  Months flew by, and their bond grew stronger with each passing
                  day. Asif planned a special proposal on a serene evening by
                  the lake, one of Aisha's favorite places. Aisha, overwhelmed
                  with emotion, nodded through happy tears and whispered, "Yes,
                  Asif. I can't imagine my life without you." The ring sparkled
                  as much as their smiles, and the world seemed to pause for
                  their magical moment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 phone-story">
              <div className="story-img">
                <img
                  src={Stroytelling1}
                  alt="Couple Images"
                  data-aos="flip-up"
                />
              </div>
            </div>
          </div>

          <div className="row story-row">
            <div className="col-lg-6">
              <div className="story-img">
                <img
                  src={Stroytelling}
                  alt="Couple Images"
                  data-aos="flip-up"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="story-telling" data-aos="zoom-in-up">
                <h2>
                  Wedding Day <i className="bi bi-heart-fill"></i>
                </h2>
                <h4>
                  Asif <i className="bi bi-arrow-through-heart"></i> Aisha
                </h4>

                <p>
                  Their wedding day was nothing short of a fairytale. The venue
                  was adorned with white roses and golden drapes, symbolizing
                  purity and prosperity. Asif looked dashing in his traditional
                  sherwani, while Aisha, in her intricate red lehenga, was the
                  epitome of elegance. As they exchanged smiles and stole
                  glances, it was clear that this was not just a wedding but the
                  beginning of a lifetime filled with love, respect, and endless
                  memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-2">
        <ImageGallery />
      </section>
    </>
  );
};

export default OurStory;
