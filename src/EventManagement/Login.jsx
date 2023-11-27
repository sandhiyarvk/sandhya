import React, { useState, useRef } from "react";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:4000/users");
      const users = response.data;
      const foundUser = users.find(
        (user) =>
          user.email === emailRef.current.value &&
          user.password === passwordRef.current.value
      );
      userContext.dispatch({ type: "LOGIN", payload: foundUser });
      if (foundUser) {
        navigate("/userpage");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching or comparing data:", error);
      setError("Error while processing. Please try again.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <center>
          <Typography variant="h4" className="userlogin">
            USER LOGIN
          </Typography>
        </center>
        <p>
          <b>Please login to continue</b>{" "}
        </p>
        <label>Email Address</label>
        <input id="email" name="email" type="email" ref={emailRef} required />
        <label>Password</label>
        <input
          id="password"
          name="password"
          typew="password"
          ref={passwordRef}
          required
        />
        <center>
          <Button className="button" type="submit" style={{ color: "white" }}>
            <b>LOGIN</b>
          </Button>
        </center>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br></br>
        <Typography paddingLeft={4}>
          <b>
            Don't have an account?&emsp;
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              Register
            </Link>
          </b>
        </Typography>
      </form>
    </div>
  );
};

export default Login;