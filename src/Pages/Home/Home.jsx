import React, { useEffect } from "react";
import "./Home.css";
import heroimage from "../../Assets/heroimage.png";
import Storyslider from "../../Components/StorySlider/Storyslider";
import ImageGallery from "../../Components/Gallery/ImageGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import StoryImages from "../../Components/SuccesStory/StoryImages";
import WeddingPlane from "../../Components/Planes/WeddingPlane";
import WebsiteSubscribe from "../../Components/Subscribe/WebsiteSubscribe";
import Feedback from "../../Components/Testimonial/Feedback";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Offset from the top of the screen
      delay: 50, // Delay before the animation starts
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Animation easing type
      once: false, // Whether animation happens only once
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Find Your Soulmate - Muslim Malik Riste</title>
        <meta
          name="description"
          content="Discover meaningful connections and celebrate love with Muslim Malik Riste. Find your perfect match today with millions of success stories."
        />
        <meta
          name="keywords"
          content="Muslim matchmaking, soulmate, Muslim matrimonial, Malik Riste, perfect match, marriage platform"
        />
        <meta name="author" content="Muslim Malik Riste" />
        <meta
          property="og:title"
          content="Find Your Soulmate - Muslim Malik Riste"
        />
        <meta
          property="og:description"
          content="Discover meaningful connections and celebrate love with Muslim Malik Riste. Find your perfect match today with millions of success stories."
        />
        <meta property="og:image" content={heroimage} />
        <meta property="og:url" content="https://your-website-url.com/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Find Your Soulmate - Muslim Malik Riste"
        />
        <meta
          name="twitter:description"
          content="Discover meaningful connections and celebrate love with Muslim Malik Riste. Find your perfect match today with millions of success stories."
        />
        <meta name="twitter:image" content={heroimage} />
      </Helmet>

      <div className="container-fluid p-0">
        <div className="hero-img">
          <img
            src={heroimage}
            alt="Muslim Malik Riste Banner"
            className="img-fluid"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">
            Find Your Soulmate on Muslim Malik Riste
          </h1>
          <div className="hero-para-text">
            <h5 className="hero-paragraph">
              Discover meaningful connections and celebrate love with millions
              of success stories. Your perfect match is just a click away.
            </h5>
          </div>

          <div className="hero-mobile-sign">
            <div className="mobile-login">
              <Link to="/login">
                <button className="hero-login">Login In</button>
              </Link>
            </div>
            <div className="mobile-login">
              <Link to="/signup">
                <button className="hero-login">Sign Up</button>
              </Link>
            </div>
            <div className="mobile-login">
              <Link to="/userProfile">
                <button className="hero-login">My Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light-pink">
        <div className="row">
          <div className="col-lg-7">
            <div className="main-match-div">
              <div className="match-data" data-aos="fade-right">
                <div className="match-icon">
                  <i className="bi bi-box-arrow-in-right match-icon-color"></i>
                </div>
                <div className="match-icon-data">
                  <h5>Sign Up</h5>
                  <p>Register for free & put up your matrimonial profile up.</p>
                </div>
              </div>
              <div className="match-data1" data-aos="fade-left">
                <div className="match-icon-data">
                  <h5>Connect</h5>
                  <p>Select & Connect with matches you like.</p>
                </div>
                <div className="match-icon">
                  <i className="bi bi-wechat match-icon-color"></i>{" "}
                </div>
              </div>
              <div className="match-data" data-aos="fade-right">
                <div className="match-icon">
                  <i className="bi bi-chat-heart match-icon-color"></i>{" "}
                </div>
                <div className="match-icon-data">
                  <h5>Interact</h5>
                  <p> Become a premium member & start a conversation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="seprater"></div>
          </div>

          <div className="col-lg-4 m-auto">
            <div
              className="match-heading"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-duration="1200"
            >
              <h2>
                Discover Your <br /> <span>Perfect Match</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section>
        <Storyslider />
      </section>
      <section>
        <StoryImages />
      </section>
      <section>
        <WeddingPlane />
        <div className="button-container">
          <Link to="/member">
            <button className="viewall-btn">View More</button>
          </Link>
        </div>
      </section>
      <section>
        <ImageGallery />
      </section>
      <section>
        <WebsiteSubscribe />
      </section>
      <section>
        <Feedback />
      </section>
    </>
  );
};

export default Home;
