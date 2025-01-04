import React from "react";
import "./SignupPage.css";

const ContactInfo = ({ formData, handleChange, goToTab }) => {
  return (
    <>
      <div>
        <h3>Contact Information</h3>
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="phone">Phone <sup>*</sup></label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="email" className="label-main">Email <sup>*</sup></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="city" className="label-main">City <sup>*</sup></label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="state" className="label-main">State <sup>*</sup></label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="country" className="label-main">Country <sup>*</sup></label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="pin" className="label-main">Pin Code <sup>*</sup></label>
                <input
                  type="number"
                  id="pin"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="next-btn login-page-btn"
            onClick={() => goToTab(3)}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
