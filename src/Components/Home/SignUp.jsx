import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [notvalidMail, setNotvalidMail] = useState(false);
  const [notvalidMobile, setNotvalidMobile] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const mailVarification = (e) => {
    setMail(e.target.value);
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setNotvalidMail(true);
    } else {
      setNotvalidMail(false);
    }
  };
  const mobileVarification = (e) => {
    setMobile(e.target.value);
    if (
      !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
        e.target.value
      )
    ) {
      setNotvalidMobile(true);
    } else {
      setNotvalidMobile(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !userName || !mail || !mobile || !agree) {
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
      if (!agree) {
        setAgreeError(true);
      }
    } else {
      const userData = {
        name,
        userName,
        mail,
        mobile,
      };
      localStorage.setItem("userInfo", JSON.stringify(userData));

      navigate("/Category");
    }
  };
  const handleResetError = () => {
    setMailError(false);
    setMobileError(false);
    setNameError(false);
    setUserNameError(false);
    setAgreeError(false);
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
              placeholder="Name"
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
              placeholder="UserName"
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
              value={mail}
              onClick={() => handleResetError()}
              onChange={(e) => mailVarification(e)}
              placeholder="Email"
              type="text"
            />
            <span
              className={`${
                mailError || notvalidMail ? "error-display" : "error-none"
              }`}
            >
              {mailError && !notvalidMail ? "email is required" : null}

              {notvalidMail && !mailError ? "Enter a valid mail" : null}
            </span>
          </div>{" "}
          <div className="form-sec">
            <input
              onClick={() => handleResetError()}
              onChange={(e) => mobileVarification(e)}
              value={mobile}
              placeholder="Phone"
              type="number"
            />
            <span
              className={`${
                mobileError || notvalidMobile ? "error-display" : "error-none"
              }`}
            >
              {mobileError && !notvalidMail ? "Phone is required" : null}
              {notvalidMobile ? "Enter a valid mobile Number" : null}
            </span>
          </div>
          <div className="form-sec-info flex">
            <div className="check">
              <input
                value={agree}
                onClick={() => setAgree(!agree)}
                type="checkbox"
              />
              <span className="font-small">
                Share my registration data with superapp
                <span
                  className={`${agreeError ? "error-display" : "error-none"}`}
                >
                  {agreeError ? "Please agree the terms  & conditions" : null}
                </span>
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
