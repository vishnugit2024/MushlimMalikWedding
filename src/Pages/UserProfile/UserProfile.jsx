import React, { useState } from "react";
import ReactModal from "react-modal";
import "./userprofile.css";
import { Link } from "react-router-dom";
import userprofilepic from "../../Assets/Testimonial3.png";
import AvatarEditor from "react-avatar-editor";

ReactModal.setAppElement("#root"); // To prevent screen readers from reading background content

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "Asif",
    fatherName: "DynamicName",
    motherName: "DynamicName",
    dob: "DynamicDate",
    phone: "DynamicPhone",
    email: "DynamicEmail",
    gender: "DynamicData",
    age: "Dynamicage",
    height: "DynamicData",
    belong: "DynamicData",
    education: "DynamicData",
    working: "DynamicData",
    income: "DynamicData",
    address: "DynamicAddress",
    city: "DyanamicCity",
    pin: "DyanamicPin",
    budget: "Dyamic Budget",
    style: "DynamicData",
    familyHead: "DynamicData",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    alert("Profile updated successfully!");
    setShowModal(false); // Close the modal after submission
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              {/* Profile Section */}
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={userprofilepic}
                        alt="Admin"
                        className="rounded-circle"
                        width={150}
                       
                      />
                      <div className="profile-data mt-3">
                        <h4>{formData.name}</h4>
                        <p className="text-secondary mb-1">
                          {formData.working}
                        </p>
                        <p className="text-muted font-size-sm">
                          {formData.city}
                        </p>
                        <Link to="/">
                          <button className="btn userprofile-logout">
                            Log Out
                          </button>
                        </Link>
                        <button
                          className="btn userprofile-creataccount"
                          onClick={() => setShowModal(true)}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Other Profile Details */}
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Father Name
                      </h6>
                      <span className="text-secondary">
                        {formData.fatherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Mother Name
                      </h6>
                      <span className="text-secondary">
                        {formData.motherName}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        DOB
                      </h6>
                      <span className="text-secondary">{formData.dob}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Phone
                      </h6>
                      <span className="text-secondary">{formData.phone}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <i className="bi bi-arrow-bar-right"></i>
                        Email
                      </h6>
                      <span className="text-secondary">{formData.email}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Profile Data */}
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    {/* Profile Details */}
                    {Object.entries(formData)
                      .filter(
                        ([key]) =>
                          ![
                            "name",
                            "fatherName",
                            "motherName",
                            "dob",
                            "phone",
                            "email",
                          ].includes(key)
                      )
                      .map(([key, value]) => (
                        <div className="row" key={key}>
                          <div className="col-sm-3">
                            <h6 className="mb-0">
                              {key.replace(/_/g, " ").toUpperCase()}
                            </h6>
                          </div>
                          <div className="col-sm-9 text-secondary">{value}</div>
                          <hr />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        <ReactModal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h2>Edit Profile</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="row modal-row">
              {Object.entries(formData).map(([key, value], index) => (
                <div className="col-md-4 mb-3" key={key}>
                  <div className="form-group">
                    <label htmlFor={key}>
                      {key.replace(/_/g, " ").toUpperCase()}
                    </label>
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn save-change">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </ReactModal>
      </section>
    </>
  );
};

export default UserProfile;
