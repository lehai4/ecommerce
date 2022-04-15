import React, { useState } from "react";
import Helmet from "./Helmet";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Common";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signUp = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Helmet title="Đăng ký">
      <div className="register">
        <div className="register__name">Register</div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your name..."
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="Enter your password..."
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              style={{ marginTop: 10 }}
              type="text"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="ConfirmPassword..."
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button size="sm">Register</Button>
        </form>
        {error && <span className="error">{error}</span>}
        <div className="login__regis">
          <Link to="/login">Back to login page?</Link>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
