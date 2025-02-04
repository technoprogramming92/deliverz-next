import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 flex items-center wow fadeIn"
            data-wow-delay=".3s"
          >
            <div className="line mr-30"></div>
            <a className="flex justify-center footer-logo">
              <img src="assets/images/logo/logo2.png" alt="" />
            </a>
            <div className="line ml-30"></div>
          </div>
          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <ul className="mt-35 footer-link flex justify-center">
              <li>
                <a href="about.html">About Basilico</a>
              </li>
              <li>
                <a href="order.html">Order Food</a>
              </li>
              <li>
                <a href="recruitment.html">Careers</a>
              </li>
              <li>
                <a href="offers.html">Offers</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="menu-restaurant.html">Gift Voucher</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
            </ul>
          </div>

          <div
            className="col-md-4 border-right mobile-mb30 wow fadeIn"
            data-wow-delay=".3s"
          >
            <h5 className="white uppercase mb-22 center text-spacing-1">
              Information
            </h5>
            <ul className="list center">
              <li>
                <span>62 Big Tree St, Livonia, New York 14487, USA</span>
              </li>
              <li>
                <span>themesflat@gmail.com</span>
              </li>
              <li>
                <span>Terms and Conditions</span>
              </li>
              <li>
                <span>Warranty and Services</span>
              </li>
            </ul>
          </div>
          <div
            className="col-md-4 border-right mobile-mb30 wow fadeIn"
            data-wow-delay=".4s"
          >
            <h5 className="white uppercase mb-22 center text-spacing-1">
              contact & order
            </h5>
            <ul className="list center mb-30">
              <li className="mb-10">
                <span>Call Us To Order or Order Online</span>
              </li>
              <li>
                <a className="call" href="tel:9103447520">
                  910-344-7520
                </a>
              </li>
            </ul>
            <div className="flex justify-center">
              <a href="order.html" className="tf-button">
                order online now
              </a>
            </div>
          </div>

          <div className="col-md-4 wow fadeIn" data-wow-delay=".5s">
            <h5 className="white uppercase mb-22 center text-spacing-1">
              Hour time open
            </h5>
            <ul className="list center mb-30">
              <li>
                <span>
                  Monday – Thursday: <span>8.00am – 21.00pm</span>
                </span>
              </li>
              <li>
                <span>
                  Friday – Saturday : <span>9.00am – 22.00pm</span>
                </span>
              </li>
              <li>
                <span>
                  Sunday: <span>8.00 – 23.00pm</span>
                </span>
              </li>
              <li>
                <span>
                  Holiday: <span className="color-main">Closed</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <div className="footer-social flex items-center justify-center">
              <ul className="social flex items-center justify-center">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-messenger"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12">
            <div className="footer-bottom flex items-center">
              <p className="copyright">
                © Copyright <a href="#">Themesflat</a> 2023. All Rights
                Reserved.
              </p>
              <div className="payment-methods">
                <a className="flex image" href="#">
                  <img src="assets/images/common/payment-methods.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
