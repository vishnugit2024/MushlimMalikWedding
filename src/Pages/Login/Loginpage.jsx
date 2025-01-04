import React, { useState } from "react";
import ReactModal from "react-modal";
import "./Loginpage.css";
import { Link } from "react-router-dom";

ReactModal.setAppElement("#root"); // Set the root element for accessibility

const Loginpage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [otp, setOtp] = React.useState(Array(6).fill(""));
  const [error, setError] = React.useState("");

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    alert("OTP sent to your Email");
    setShowForgotPassword(false);
    setShowOTPForm(true);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();

    // Join OTP inputs into a single string
    const otpValue = otp.join("");

    // Validate OTP
    if (otpValue.length < 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    setError("");
    alert("OTP Verified!");

    // Clear error and proceed with OTP verification
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOtpChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Auto-focus to the next input field
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    // Focus back to the previous field on backspace
    if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <>
      <div className="container-fluid login-bg">
        <div className="wrapper">
          <form action="#" className="Login-form">
            <h2 className="login-heading">Login</h2>
            <div className="input-field">
              <input type="text" required />
              <label>Enter your Email</label>
            </div>
            <div className="input-field password-field">
              <input type={passwordVisible ? "text" : "password"} required />
              <label>Enter your Password</label>
              <button
                type="button"
                className="eye-icon"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p>Remember me</p>
              </label>
              <button
                type="button"
                className="link-button"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot password?
              </button>
            </div>
            <button type="submit" className="Login-button">
              Log In
            </button>
            <div className="register">
              <p>
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ReactModal
        isOpen={showForgotPassword}
        onRequestClose={() => setShowForgotPassword(false)}
        contentLabel="Forgot Password"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="form-container">
          <h3>Forgot Password</h3>
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="input-field">
              <input type="email" required />
              <label>Enter your Email</label>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => setShowForgotPassword(false)}
            >
              Close
            </button>
          </form>
        </div>
      </ReactModal>

      {/* OTP Modal */}
      <ReactModal
        isOpen={showOTPForm}
        onRequestClose={() => setShowOTPForm(false)}
        contentLabel="Enter OTP"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="form-container">
          <h2>Enter OTP</h2>
          <form onSubmit={handleOTPSubmit}>
            <div className="input-field otp-field">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={otp[index] || ""}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[index]) {
                      handleOtpChange("", index - 1);
                    }
                  }}
                  className="otp-input"
                />
              ))}
            </div>
            {/* Display Error Message */}
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">
              Verify OTP
            </button>
            <button
              type="button"
              className="close-button"
              onClick={() => setShowOTPForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      </ReactModal>
    </>
  );
};

export default Loginpage;
