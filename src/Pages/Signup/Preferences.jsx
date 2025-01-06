import React from "react";
import "./SignupPage.css";

const Preferences = ({ formData, handleChange, goToTab }) => {
  return (
    <>
      <div>
        <h3>Preferences</h3>
        <form>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="partnerGender" className="label-main">
                  Preferred Partner Gender <sup>*</sup>
                </label>
                <select
                  id="partnerGender"
                  name="partnerGender"
                  className="select-style"
                  value={formData.partnerGender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="weddingBudget" className="label-main">
                  Wedding Budget
                </label>
                <input
                  type="text"
                  id="weddingBudget"
                  name="weddingBudget"
                  value={formData.weddingBudget}
                  onChange={handleChange}
                  
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="weddingStyle" className="label-main">
                  Wedding Style <sup>*</sup>
                </label>
                <select
                  id="weddingStyle"
                  name="weddingStyle"
                  className="select-style"
                  value={formData.weddingStyle}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Style
                  </option>
                  <option value="Sunnati(Max 15 People)">Sunnati (Max 15 People)</option>
                  <option value="Traditional">Traditional</option>
                  <option value="Expensive">Expensive</option>
                </select>
              </div>
            </div>
          </div>

          <button type="button" className="next-btn login-page-btn" onClick={() => goToTab(4)}>
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Preferences;
