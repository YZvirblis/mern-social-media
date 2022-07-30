import React, { useEffect } from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import RegisterPage from "./pages/register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // //@ts-ignore
  // const user = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   user ? navigate("/") : navigate("/login");
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
