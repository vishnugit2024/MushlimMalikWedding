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
                <label htmlFor="PartnerGender" className="label-main" >Preferred Partner Gender <sup>*</sup></label>
                <select
                  id="PartnerGender"
                  name="PartnerGender"
                  className="select-style"
                  value={formData.PartnerGender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option
                    name="PartnerGender"
                    value="male"
                    checked={formData.PartnerGender === "male"}
                    onChange={handleChange}
                  >
                    Male
                  </option>
                  <option
                    name="PartnerGender"
                    value="female"
                    checked={formData.PartnerGender === "female"}
                    onChange={handleChange}
                  >
                    Female
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="WeddingBudget" className="label-main" >Wedding Budget <sup>*</sup></label>
                <input
                  type="text"
                  id="WeddingBudget"
                  name="WeddingBudget"
                  value={formData.WeddingBudget}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="WeddingStyle" className="label-main" >Wedding Style <sup>*</sup></label>
                <select
                  id="WeddingStyle"
                  name="WeddingStyle"
                  className="select-style"
                  value={formData.WeddingStyle}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Style
                  </option>
                  <option
                    name="WeddingStyle"
                    value="Sunnati(Max 15 People)"
                    checked={formData.WeddingStyle === "Sunnati(Max 15 People)"}
                    onChange={handleChange}
                  >
                    Sunnati(Max 15 People)
                  </option>
                  <option
                    name="WeddingStyle"
                    value="Traditional"
                    checked={formData.WeddingStyle === "Traditional"}
                    onChange={handleChange}
                  >
                    Traditional
                  </option>
                  <option
                    name="WeddingStyle"
                    value="Expensive"
                    checked={formData.WeddingStyle === "Expensive"}
                    onChange={handleChange}
                  >
                    Expensive
                  </option>
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
