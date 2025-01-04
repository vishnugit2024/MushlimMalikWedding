import React, { useState } from "react";
import "./SignupPage.css";

const Basicinfo = ({ formData, handleChange, goToTab }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div>
        <h4>Basic Information</h4>
        <form className="main-form">
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="name" className="label-main">
                  Full Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="age" className="label-main">
                  Age <sup>*</sup>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="gender" className="label-main">
                  Gender <sup>*</sup>
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="select-style"
                  value={formData.gender}
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
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Fathername" className="label-main">
                  Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="Fathername"
                  value={formData.Fathername}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Mothername" className="label-main">
                  Mother Name
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="Mothername"
                  value={formData.Mothername}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="DOB" className="label-main">
                  Date of Birth <sup>*</sup>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="DOB"
                  className="select-style"
                  value={formData.DOB}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Religion" className="label-main">
                  Grand Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="religion"
                  name="Religion"
                  value={formData.Religion}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Caste" className="label-main">
                  Occupation<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="caste"
                  name="Caste"
                  value={formData.Caste}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="Gotra" className="label-main">
                  Family Occupation Head <sup>*</sup>
                </label>
                <select
                  id="gotra"
                  name="Gotra"
                  className="select-style"
                  value={formData.Gotra}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Head
                  </option>
                  <option value="Father">Father</option>
                  <option value="Brother">Brother</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Height" className="label-main">
                  Height<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="height"
                  name="Height"
                  value={formData.Height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Pehchan" className="label-main">
                  Belong (Pehchan)<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="pehchan"
                  name="Pehchan"
                  value={formData.Pehchan}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Siblings" className="label-main">
                  Number of Siblings<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="siblings"
                  name="Siblings"
                  value={formData.Siblings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="MarriedStatus" className="label-main">
                  Sibling Married Status <sup>*</sup>
                </label>
                <select
                  id="marriedStatus"
                  name="MarriedStatus"
                  className="select-style"
                  value={formData.MarriedStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="UnMarried">UnMarried</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Windowed">Windowed</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Education" className="label-main">
                  Education<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="education"
                  name="Education"
                  value={formData.Education}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Working" className="label-main">
                  Working<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="working"
                  name="Working"
                  value={formData.Working}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="AnnualIncome" className="label-main">
                  Annual Income<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="annualIncome"
                  name="AnnualIncome"
                  value={formData.AnnualIncome}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Password" className="label-main">
                  Create Password<sup>*</sup>
                </label>
                <input type={passwordVisible ? "text" : "password"} className="sign-up-password" required />
                <button
                  type="button"
                  className="signup-eye-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ?  <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="ProfilePhoto" className="label-main">
                  Upload Profile Image<sup>*</sup>
                </label>
                <input type="file" accept="image/*" required />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="next-btn login-page-btn"
            onClick={() => goToTab(2)}
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default Basicinfo;
