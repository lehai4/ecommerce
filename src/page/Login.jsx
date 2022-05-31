import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Helmet, Button, InputField } from "../Common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [error, setError] = useState("");
  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (e) => {
      if (e.email === "" || e.password === "") {
        e.email === ""
          ? refInputEmail.current.focus()
          : refInputPassword.current.focus();
      } else {
        const signIn = () =>
          signInWithEmailAndPassword(auth, e.email, e.password);
        try {
          await signIn(auth, e.email, e.password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
      }
    },
  });

  const handleGoogleSignIn = () => {};
  return (
    <Helmet title="Đăng nhập">
      <div className="login">
        <div className="login__name">Login</div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="form__group">
            <InputField
              {...formik}
              label="email"
              refInputType={refInputEmail}
            />
            {formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}
          </div>
          <div className="form__group">
            <InputField
              {...formik}
              label="password"
              refInputType={refInputPassword}
            />
            {formik.errors.password && (
              <p className="error">{formik.errors.password}</p>
            )}
          </div>
          <Button size="sm" type="submit">
            Đăng nhập
          </Button>
          <div className="google__btn" onClick={handleGoogleSignIn}>
            <GoogleButton type="dark" />
          </div>
        </form>
        {error && <span className="error">{error}</span>}
        <div className="login__regis">
          Do not have an account? <Link to="/register">Create account</Link>
        </div>
      </div>
    </Helmet>
  );
};
export default React.memo(Login);
