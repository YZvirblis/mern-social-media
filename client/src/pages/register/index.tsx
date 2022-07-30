import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import * as userController from "../../api/user.api.controller";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user.slice";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (verifyPassword !== password) {
      setError("Passwords must match.");
    } else {
      setError(null);
      const userToSend = {
        username,
        email,
        password,
      };
      const res = await userController.registerUser(userToSend);

      res.error && setError(res.error);

      if (res.user) {
        setError(null);
        dispatch(setUser(res.user));
        navigate("/");
      }

      // DISPATCH USER TO REDUX
    }
  };

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
            {error ? <span className="error">{error}</span> : null}
            <input
              placeholder="Username"
              className="loginInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <input
              placeholder="Confirm Password"
              className="loginInput"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              type="password"
              required
            />
            <button className="loginButton" onClick={handleRegister}>
              Sign Up
            </button>
            <span className="loginForgot">Already have an account?</span>
            <Link className="loginRegisterButton" to="/login">
              <button className="loginRegisterButton">Log in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
