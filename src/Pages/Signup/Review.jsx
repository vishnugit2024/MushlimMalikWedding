import React from "react";
import "./SignupPage.css";

const Review = ({ formData }) => {
  return (
    <>
      <div>
        <h3>Review and Submit</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Name</label>
              <p className="Signup-Review">{formData.name}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Age</label>
              <p className="Signup-Review">{formData.age}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Gender</label>
              <p className="Signup-Review">{formData.gender}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Father Name</label>
              <p className="Signup-Review">{formData.Fathername}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Mother Name</label>
              <p className="Signup-Review">{formData.Mothername}</p>
            </div>
            <div className="form-field">
              <label className="label-main">DOB</label>
              <p className="Signup-Review">{formData.DOB}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Grand Father Name</label>
              <p className="Signup-Review">{formData.Religion}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Occupation</label>
              <p className="Signup-Review">{formData.Caste}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Head of Family Occupation</label>
              <p className="Signup-Review">{formData.Gotra}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Height</label>
              <p className="Signup-Review">{formData.Height}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Belong (Pehchan)</label>
              <p className="Signup-Review">{formData.Pehchan}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Siblings</label>
              <p className="Signup-Review">{formData.Siblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Sibling Married Status</label>
              <p className="Signup-Review">{formData.MarriedStatus}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Education</label>
              <p className="Signup-Review">{formData.Education}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Working</label>
              <p className="Signup-Review">{formData.Working}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Annual Income</label>
              <p className="Signup-Review">{formData.AnnualIncome}</p>
            </div>

            <div className="form-field">
              <label className="label-main">Phone</label>
              <p className="Signup-Review">{formData.phone}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">House</label>
              <p className="Signup-Review">{formData.House}</p>
            </div>
            <div className="form-field">
              <label className="label-main">City</label>
              <p className="Signup-Review">{formData.City}</p>
            </div>
            <div className="form-field">
              <label className="label-main">State</label>
              <p className="Signup-Review">{formData.State}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Address</label>
              <p className="Signup-Review">{formData.Address}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Pin</label>
              <p className="Signup-Review">{formData.Pin}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Preferred Partner Gender </label>
              <p className="Signup-Review">{formData.PartnerGender}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Budget</label>
              <p className="Signup-Review">{formData.WeddingBudget}</p>
            </div>
            <div className="form-field">
              <label className="label-main">WeddingStyle</label>
              <p className="Signup-Review">{formData.WeddingStyle}</p>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn login-page-btn">
          Submit
        </button>
      </div>
    </>
  );
};

export default Review;
