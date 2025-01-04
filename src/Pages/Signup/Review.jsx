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
              <label className="label-main">Father's Name</label>
              <p className="Signup-Review">{formData.fatherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Mother's Name</label>
              <p className="Signup-Review">{formData.motherName}</p>
            </div>
            <div className="form-field">
              <label className="label-main">DOB</label>
              <p className="Signup-Review">{formData.dob}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Grandfather's Name</label>
              <p className="Signup-Review">{formData.religion}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Head of Family Occupation</label>
              <p className="Signup-Review">{formData.gotra}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Height</label>
              <p className="Signup-Review">{formData.height}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Belong (Pehchan)</label>
              <p className="Signup-Review">{formData.pehchan}</p>
            </div>
            <div className="form-field">
              <label className="label-main">No. of Siblings</label>
              <p className="Signup-Review">{formData.siblings}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Sibling Married Status</label>
              <p className="Signup-Review">{formData.marriedStatus}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Education</label>
              <p className="Signup-Review">{formData.education}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Working</label>
              <p className="Signup-Review">{formData.working}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Annual Income</label>
              <p className="Signup-Review">{formData.annualIncome}</p>
            </div>

            <div className="form-field">
              <label className="label-main">Phone</label>
              <p className="Signup-Review">{formData.phone}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-field">
              <label className="label-main">Email</label>
              <p className="Signup-Review">{formData.email}</p>
            </div>
            <div className="form-field">
              <label className="label-main">City</label>
              <p className="Signup-Review">{formData.city}</p>
            </div>
            <div className="form-field">
              <label className="label-main">State</label>
              <p className="Signup-Review">{formData.state}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Country</label>
              <p className="Signup-Review">{formData.country}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Pin Code</label>
              <p className="Signup-Review">{formData.pin}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Preferred Partner Gender</label>
              <p className="Signup-Review">{formData.partnerGender}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Budget</label>
              <p className="Signup-Review">{formData.weddingBudget}</p>
            </div>
            <div className="form-field">
              <label className="label-main">Wedding Style</label>
              <p className="Signup-Review">{formData.weddingStyle}</p>
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
