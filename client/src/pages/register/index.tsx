import React from "react";
import "./register.css";

function RegisterPage() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">memo/:re</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on memo/:re
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Already have an account?</span>
            <button className="loginRegisterButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
