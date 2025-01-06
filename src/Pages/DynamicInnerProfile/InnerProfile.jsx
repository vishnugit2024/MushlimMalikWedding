import React from "react";
import "./innerProfile.css";
import innerImage from "../../Assets/Testimonial3.png";
const InnerProfile = () => {
  const handleAlert = () => {
    alert("Request send successfully");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="image-section">
            <img src={innerImage} alt="user-inner-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="left-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Full Name
                  </h6>
                  <span className="text-secondary">Abul Khan</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Age
                  </h6>
                  <span className="text-secondary">23</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Gender
                  </h6>
                  <span className="text-secondary">Female</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Father Name
                  </h6>
                  <span className="text-secondary">Abul Khan</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Mother Name
                  </h6>
                  <span className="text-secondary">Sana Khan</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Grand Father Name
                  </h6>
                  <span className="text-secondary">Adil Khan</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Phone
                  </h6>
                  <span className="text-secondary">*****</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="center-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Height
                  </h6>
                  <span className="text-secondary">5.2ich</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    DOB
                  </h6>
                  <span className="text-secondary">10-05-2003</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Marital Status
                  </h6>
                  <span className="text-secondary">Single</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Belongs
                  </h6>
                  <span className="text-secondary">Mushlim</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    No. of Brothers
                  </h6>
                  <span className="text-secondary">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    No. of Sisters
                  </h6>
                  <span className="text-secondary">3</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Email
                  </h6>
                  <span className="text-secondary">****@gamil.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-data">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Education
                  </h6>
                  <span className="text-secondary">BA</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Working
                  </h6>
                  <span className="text-secondary">Accountant</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Annual Income
                  </h6>
                  <span className="text-secondary">500000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    City
                  </h6>
                  <span className="text-secondary">Delhi</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Country
                  </h6>
                  <span className="text-secondary">India</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Wedding Budget
                  </h6>
                  <span className="text-secondary">30000</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className="bi bi-arrow-bar-right"></i>
                    Wedding Style
                  </h6>
                  <span className="text-secondary">Expensive</span>
                </li>
              </ul>
            </div>
          </div>
          <h5 className="text-danger">
            Note: Send Connection Request to Persone for Access Contact Details.
          </h5>
          <div className="button-container my-3">
            <button className="viewall-btn" onClick={handleAlert}>
              Connect Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerProfile;
