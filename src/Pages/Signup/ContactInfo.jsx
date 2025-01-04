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
                <label htmlFor="House" className="label-main" >House <sup>*</sup></label>
                <input
                  type="text"
                  id="House"
                  name="House"
                  placeholder="Rental/Owned"
                  value={formData.House}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="City" className="label-main" >City <sup>*</sup></label>
                <input
                  type="text"
                  id="City"
                  name="City"
                  value={formData.City}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
            <div className="form-field">
                <label htmlFor="State" className="label-main" >State <sup>*</sup></label>
                <input
                  type="text"
                  id="State"
                  name="State"
                  value={formData.State}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
            <div className="form-field">
                <label htmlFor="Address" className="label-main" >Address<sup>*</sup></label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
            <div className="form-field">
                <label htmlFor="Pin" className="label-main" >Pin Code<sup>*</sup></label>
                <input
                  type="number"
                  id="Pin"
                  name="Pin"
                  value={formData.Pin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <button type="button" className="next-btn login-page-btn"  onClick={() => goToTab(3)}>
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactInfo;
