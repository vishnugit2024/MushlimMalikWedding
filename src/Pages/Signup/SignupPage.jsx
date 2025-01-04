import React, { useState } from "react";
import "./SignupPage.css";
import BasicInfo from "./Basicinfo";
import ContactInfo from "./ContactInfo";
import Preferences from "./Preferences";
import Review from "./Review";

const SignupPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    Fathername: "",
    Mothername: "",
    DOB: "",
    Religion: "",
    Caste: "",
    Gotra: "",
    Height: "",
    Pehchan: "",
    Siblings: "",
    MarriedStatus: "",
    Education: "",
    Working: "",
    AnnualIncome: "",
    phone: "",
    House: "",
    City: "",
    State: "",
    Address: "",
    Pin: "",
    PartnerGender: "",
    WeddingBudget: "",
    WeddingStyle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const goToTab = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <div className="container-fluid sign-up-form">
        <div className="Main-Form_container" id="signup-page">
          <div className="form-header">
            <h1 className="sign-form-heading">Malik Weddings Signup</h1>
          </div>

          <div className="multitab-form-area">
            {/* Tab Links */}
            <div className="tab-links-area">
              <ul>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 1 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(1)}
                  >
                    Personal Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 2 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(2)}
                  >
                    Contact Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 3 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(3)}
                  >
                    Preferences
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      currentTab === 4 ? "tab-link active" : "tab-link"
                    }
                    onClick={() => goToTab(4)}
                  >
                    Review
                  </a>
                </li>
              </ul>
            </div>

            {/* Form Panels */}
            <div className="tab-form-area">
              {currentTab === 1 && (
                <BasicInfo
                  formData={formData}
                  handleChange={handleChange}
                  goToTab={goToTab}
                />
              )}
              {currentTab === 2 && (
                <ContactInfo
                  formData={formData}
                  handleChange={handleChange}
                  goToTab={goToTab}
                />
              )}
              {currentTab === 3 && (
                <Preferences
                  formData={formData}
                  handleChange={handleChange}
                  goToTab={goToTab}
                />
              )}
              {currentTab === 4 && <Review formData={formData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
