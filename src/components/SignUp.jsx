import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "@mui/icons-material/ChangeHistory";
import { TextField, Button } from "@mui/material";
import { LoginContext } from "./Context/LoginContext";

export default function SignUp() {
  const { setLogin, setPassword, setName, name, login, password } =
    useContext(LoginContext);

  const [nameError, setNameError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!login) {
      setLoginError("Email is required");
      isValid = false;
    } else if (!validateEmail(login)) {
      setLoginError("Invalid email format");
      isValid = false;
    } else {
      setLoginError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      localStorage.setItem("name", name);
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      setLogin("");
      setName("");
      setPassword("");
      navigate("/tip-top-store/signin");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };
  return (
    <div className="signup-container">
      <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Sign Up
        </p>
      </div>
      <div className="form">
        <HeaderLogo className="header-logo" /> <br />
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={Boolean(nameError)}
            helperText={nameError}
            sx={{ width: "100%", marginBottom: "1rem" }}
          />
          <br />
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
          <br />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
            sx={{ width: "100%", marginBottom: "1rem" }}
          />
          <br />
          <label onClick={togglePasswordVisibility} className="show-pass">
            <input type="checkbox" />{" "}
            <span onClick={togglePasswordVisibility}>
              {showPassword ? "Hide Password" : "Show Password"}
            </span>
          </label>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "100%", margin: "1rem 0" }}
          >
            Sign Up
          </Button>
        </form>
        <p>
          Do you have an account?{" "}
          <Link
            to="/tip-top-store/signin"
            className="link"
            style={{ textDecoration: "none" }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
