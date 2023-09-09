import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "@mui/icons-material/ChangeHistory";
import { LoginContext } from "./Context/LoginContext";
import { Button, TextField } from "@mui/material";

export default function SignIn() {
  const { setLogin, setPassword, login, password } = useContext(LoginContext);
  const myLogin = localStorage.getItem("login");
  const myPassword = localStorage.getItem("password");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!login) {
      setLoginError("Email is required");
      isValid = false;
    } else {
      setLoginError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid && (login !== myLogin || password !== myPassword)) {
      setLoginError("Invalid login credentials");
      setPasswordError("Invalid login credentials");
      isValid = false;
    }

    if (isValid) {
      setLogin("");
      setPassword("");
      navigate("/tip-top-store/collections");
      localStorage.setItem("status", "ok");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Sign In
        </p>
      </div>
      <div className="form">
        <HeaderLogo className="header-logo" /> <br />
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            error={Boolean(loginError)}
            helperText={loginError}
            sx={{ width: "100%", marginBottom: "1rem" }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
            className="text-field"
            sx={{ width: "100%", marginBottom: "1rem" }}
          />
          <label className="show-pass" onClick={togglePasswordVisibility}>
            <input type="checkbox" />{" "}
            <span onClick={togglePasswordVisibility}>{showPassword ? "Hide Password" : "Show Password"}</span>
          </label>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%", margin: "1rem 0" }}
          >
            Sign In
          </Button>
        </form>
        <Link
          to="/tip-top-store/collections"
          style={{ textDecoration: "none" }}
        >
          Continue as Guest
        </Link>{" "}
        <br />
        <p>
          Don't have an account?{" "}
          <Link to="/tip-top-store/signup" style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
