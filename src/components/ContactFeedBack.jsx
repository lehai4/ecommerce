import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";

import { Grid, InputField } from "../Common";
const ContactFeedBack = () => {
  const refInputFirstName = useRef(null);
  const refInputLastName = useRef(null);
  const refInputEmail = useRef(null);
  const refInputMessage = useRef(null);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (e) => {
      e.preventDefault();
      if (
        e.firstName === "" ||
        e.lastName === "" ||
        e.email === "" ||
        e.message === ""
      ) {
        e.firstName === ""
          ? refInputFirstName.current.focus()
          : e.lastName === ""
          ? refInputLastName.current.focus()
          : e.email === ""
          ? refInputEmail.current.focus()
          : refInputMessage.current.focus();
      } else {
      }
    },
  });
  return (
    <div className="contact__feedback">
      <Grid col={1} mdCol={1} smCol={1} gap={30}>
        <div className="contact__feedback__title">
          <span>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</span>
        </div>
        <div className="contact__feedback__content">
          <Grid col={1} mdcol={1} smCol={1} gap={30}>
            <form className="contact__form" onSubmit={formik.handleSubmit}>
              <label className="contact__form__label">First Name:</label>
              <InputField
                refInputType={refInputFirstName}
                {...formik}
                placeholder
                label="firstName"
                className={`contact__form__input`}
              />
              {formik.errors.firstName && (
                <p className="error">{formik.errors.firstName}</p>
              )}
              <label className="contact__form__label">Last Name:</label>
              <InputField
                refInputType={refInputLastName}
                {...formik}
                placeholder
                label="lastName"
                className={`contact__form__input`}
              />
              {formik.errors.lastName && (
                <p className="error">{formik.errors.lastName}</p>
              )}
              <div className="together">
                <label className="contact__form__label">Email:</label>
                <InputField
                  refInputType={refInputEmail}
                  {...formik}
                  placeholder
                  label="email"
                  className={`contact__form__input`}
                />
                {formik.errors.email && (
                  <p className="error">{formik.errors.email}</p>
                )}
              </div>
              <div className="together">
                <label className="contact__form__label">Message:</label>
                <InputField
                  refInputType={refInputLastName}
                  {...formik}
                  placeholder
                  label="message"
                  className={`contact__form__input`}
                />
                {formik.errors.message && (
                  <p className="error">{formik.errors.message}</p>
                )}
              </div>
              <button type="submit" className="contact__form__submit">
                Gửi
              </button>
            </form>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default ContactFeedBack;
