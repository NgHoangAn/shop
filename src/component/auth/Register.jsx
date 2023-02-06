import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-title">
          <p className="icon-title">
            <BsLightningChargeFill />
          </p>
          <h3 className="main-title">Sign Up</h3>
          <p className="sub-title">
            See your growth and get consulting support!
          </p>
        </div>
        <div className="login-other">
          <button>Sign up with Google</button>
        </div>
        <div className="main-login">
          <p className="content">
            <span>or Sign up with Email</span>
          </p>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="mail@gmail.com" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="mail@gmail.com" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder="Min. 8 character" />
            <div className="option-login">
              <label htmlFor="">
                <input type="checkbox" name="Remember me" id="" checked />I
                agree to the <a href="/">Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" className="btnSubmit">
              Sign Up
            </button>
          </form>
          <div className="register-link">
            Already have an Account? <a href="/">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
