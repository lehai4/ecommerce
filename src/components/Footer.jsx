import React from "react";
import { Link } from "react-router-dom";
import { Grid, ContactIcon, Line } from "../Common";
import {
  footerAboutLinks,
  footerCustomerLinks,
  footerSupport,
  footerPay,
} from "../MocksApi/FooterApi";
const Footer = () => {
  return (
    <div className="footer">
      <Line />
      <div className="container">
        <Grid col={5} mdCol={4} smCol={2} gap={50}>
          <div className="footer__info">
            <div className="footer__title">Hỗ trợ khách hàng</div>
            <div className="footer__content">
              {footerSupport.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Về Chúng tôi</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Phương thức thanh toán</div>
            <div className="footer__content df">
              {footerPay.map((pay, i) => (
                <div key={i} className="footer__content__pay__img">
                  <Link to={pay.path}>
                    <img src={pay.img} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__title">Kết nối với chúng tôi</div>
            <ContactIcon
              facebook="bx bxl-facebook-square"
              instagram="bx bxl-instagram"
              github="bx bxl-github"
              twitter="bx bxl-twitter"
            />
            <div className="footer__info__download">
              <span> Tải ứng dụng trên điện thoại</span>
              <div className="footer__info__download__ref">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                  className="footer__info__download__ref__qr"
                  alt=""
                />
                <div className="footer__info__download__ref__system">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                    alt=""
                  />
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
