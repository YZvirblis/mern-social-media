import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import * as userController from "../../api/user.api.controller";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user.slice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault();
    setError(null);
    if (email !== "" && password !== "") {
      const res = await userController.loginUser(email, password);
      res.error && setError(res.error);
      if (res.user) {
        setError(null);
        dispatch(setUser(res.user));
        window.localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/");
      }
    } else {
      setError("All fields must be filled.");
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
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <button className="loginButton" onClick={(e) => login(e)}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link className="loginRegisterButton" to="/register">
              <button className="loginRegisterButton">
                Create a new account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
