import React from "react";
import PropTypes from "prop-types";

const ContactIcon = (props) => {
  return (
    <div className="contact__icon">
      <div className="contact__icon__item">
        <a href="https://www.facebook.com/mi.yu.5682944/">
          <i className={`${props.facebook}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="/">
          <i className={`${props.instagram}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="/">
          <i className={`${props.twitter}`}></i>
        </a>
      </div>
      <div className="contact__icon__item">
        <a href="https://github.com/lehai4">
          <i className={`${props.github}`}></i>
        </a>
      </div>
    </div>
  );
};

ContactIcon.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

export default ContactIcon;
