import React, { useEffect } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import profilebg from "../../Assets/ProfileBg.jpeg";
import profileimg from "../../Assets/Storypage.png";
import profileimg1 from "../../Assets/sliderimg.png";
import profileimg2 from "../../Assets/Testimonail.png";
import profileimg3 from "../../Assets/Testimonial1.jpg";
import profileimg4 from "../../Assets/Testimonial2.png";
import profileimg5 from "../../Assets/Testimonial3.png";
import profileimg6 from "../../Assets/Testimonial4.png";
import profileimg7 from "../../Assets/Testimonial5.png";

const ProfilePage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const profileImage = [
    {
      img: profileimg,
      profileID: 101,
      name: "Shruti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg1,
      profileID: 102,
      name: "Kirti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg2,
      profileID: 103,
      name: "Arti",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg3,
      profileID: 104,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg4,
      profileID: 105,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg5,
      profileID: 106,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg6,
      profileID: 107,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
    {
      img: profileimg7,
      profileID: 108,
      name: "Rachna",
      age: "22",
      Place: "Delhi",
      height: "5.4Ich",
      education: "B.A",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Top Profiles</title>
        <meta name="description" content="Explore the top profiles on our platform" />
      </Helmet>

      <section>
        <div className="page-header">
          <h2>Every Journey Starts With a Connection</h2>
          <div className="page-render">
            <Link to="/">Home &nbsp; </Link>
            <p>&gt; Profile</p>
          </div>
        </div>
      </section>

      <section className="Profile-section">
        <div className="container">
          <div className="Heading">
            <h2>Our Top Profiles</h2>
          </div>

          <div className="row">
            <div className="profile-container">
              {profileImage.map((profile) => (
                <div
                  className="profile-card col-md-3 col-sm-6 mb-4"
                  key={profile.profileID}
                >
                  <div
                    className="profile-image"
                    style={{
                      backgroundImage: `url(${profilebg})`,
                    }}
                  >
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className="profile-pic"
                    />
                  </div>
                  <div className="profile-details">
                    <div className="details-row">
                      <p>
                        <strong>ID:</strong> {profile.profileID}
                      </p>
                      <p>
                        <strong>Name:</strong> {profile.name}
                      </p>
                    </div>
                    <div className="details-row">
                      <p>
                        <strong>Age:</strong> {profile.age}
                      </p>
                      <p>
                        <strong>Place:</strong> {profile.Place}
                      </p>
                    </div>
                    <div className="details-row">
                      <p>
                        <strong>Height:</strong> {profile.height}
                      </p>
                      <p>
                        <strong>Education:</strong> {profile.education}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
