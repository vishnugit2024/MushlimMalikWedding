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
                <label htmlFor="fatherName" className="label-main">
                  Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="motherName" className="label-main">
                  Mother Name
                </label>
                <input
                  type="text"
                  id="motherName"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="religion" className="label-main">
                  Grand Father Name <sup>*</sup>
                </label>
                <input
                  type="text"
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="height" className="label-main">
                  Height<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="dob" className="label-main">
                  Date of Birth <sup>*</sup>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="select-style"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="maritalstatus" className="label-main">
                  Married Status <sup>*</sup>
                </label>
                <select
                  id="maritalstatus"
                  name="maritalstatus"
                  className="select-style"
                  value={formData.maritalstatus}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="UnMarried">UnMarried</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Windowed">Widow</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="gotra" className="label-main">
                  Family Occupation Head<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="gotra"
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="siblings" className="label-main">
                  Number of Brothers<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="siblings"
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Sistersiblings" className="label-main">
                  Number of Sisters<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="Sistersiblings"
                  name="Sistersiblings"
                  value={formData.Sistersiblings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field gender-style">
                <label htmlFor="marriedStatus" className="label-main">
                  Sibling Married Status <sup>*</sup>
                </label>
                <select
                  id="marriedStatus"
                  name="marriedStatus"
                  className="select-style"
                  value={formData.marriedStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="UnMarried">UnMarried</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Windowed">Widow</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="pehchan" className="label-main">
                  Belong (Pehchan)<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="pehchan"
                  name="pehchan"
                  value={formData.pehchan}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="education" className="label-main">
                  Education<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="working" className="label-main">
                  Working<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="working"
                  name="working"
                  value={formData.working}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="annualIncome" className="label-main">
                  Annual Income
                </label>
                <input
                  type="number"
                  id="annualIncome"
                  name="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="Password" className="label-main">
                  Create Password<sup>*</sup>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="sign-up-password"
                  required
                />
                <button
                  type="button"
                  className="signup-eye-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i class="bi bi-eye-slash"></i>
                  ) : (
                    <i class="bi bi-eye"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-field">
                <label htmlFor="ProfilePhoto" className="label-main">
                  Upload Profile Image
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
