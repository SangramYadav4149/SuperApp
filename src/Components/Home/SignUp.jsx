import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !userName || !mail || !mobile) {
      if (!name) {
        setNameError(true);
      }
      if (!userName) {
        setUserNameError(true);
      }
      if (!mail) {
        setMailError(true);
      }
      if (!mobile) {
        setMobileError(true);
      }
    } else {
      const userData = {
        name,
        userName,
        mail,
        mobile,
      };
      localStorage.setItem("userInfo", JSON.stringify(userData));

      navigate("/hero");
    }
  };
  const handleResetError = () => {
    setMailError(false);
    setMobileError(false);
    setNameError(false);
    setUserNameError(false);
  };
  return (
    <section className="signUp-wrapper">
      <div className="flex">
        <div className="signUp-title flex">
          <span className="brand-name">Super app</span>
          <span className="create-acc">Create your new account</span>
        </div>
      </div>
      <div className="signUp-form flex">
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <div className="form-sec">
            <input
              onClick={() => handleResetError()}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="name"
              type="text"
            />
            <span className={`${nameError ? "error-display" : "error-none"}`}>
              {nameError ? "Name is required" : null}
            </span>
          </div>
          <div className="form-sec">
            <input
              onClick={() => handleResetError()}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="userName"
              type="text"
            />
            <span
              className={`${userNameError ? "error-display" : "error-none"}`}
            >
              {userNameError ? "userName is required" : null}
            </span>
          </div>{" "}
          <div className="form-sec">
            <input
              onClick={() => handleResetError()}
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              placeholder="Email"
              type="text"
            />
            <span className={`${mailError ? "error-display" : "error-none"}`}>
              {mailError ? "email is required" : null}
            </span>
          </div>{" "}
          <div className="form-sec">
            <input
              onClick={() => handleResetError()}
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              placeholder="Phone"
              type="number"
            />
            <span className={`${mobileError ? "error-display" : "error-none"}`}>
              {mobileError ? "Phone is required" : null}
            </span>
          </div>
          <div className="form-sec-info flex">
            <div className="check">
              <input type="checkbox" />
              <span className="font-small">
                Share my registration data with superapp
              </span>
            </div>

            <button className="submit-btn">Sign Up</button>
            <span className="small-text">
              {" "}
              By clicking on Sign up. you agree to Superapp{" "}
              <span span className="green">
                Terms and Conditions of Use
              </span>
            </span>
            <span className="small-text">
              {" "}
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span className="green"> Privacy Policy</span>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
