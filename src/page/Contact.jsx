import React from "react";
import { Helmet } from "../Common";
const Contact = () => {
  return (
    <>
      <Helmet title="Liên hệ">
        <div className="contact"></div>
      </Helmet>
    </>
  );
};
export default React.memo(Contact);
