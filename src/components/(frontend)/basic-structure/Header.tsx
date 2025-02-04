import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header id="header_main" className="header style1">
      <div className="container w_1290">
        <div id="site-header" className="style1">
          <div className="site-header-inner w-full">
            <div className="header__logo-mobile">
              <a href="#">
                <img src="assets/images/logo/logo2.png" alt="" />
              </a>
            </div>
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item  current-menu-item">
                  <a href="/"> Home </a>
                </li>

                <li className="menu-item ">
                  <a href="menu-restaurant.html"> About Us </a>
                </li>

                <li className="menu-item ">
                  <a href="menu-restaurant.html"> Our Menu </a>
                </li>

                <li className="menu-item">
                  <a href="offers.html"> Offers </a>
                </li>

                <li className="menu-item">
                  <a href="contact.html"> Contact </a>
                </li>
              </ul>
            </nav>
            <div className="right ml-auto flex justify-end items-center">
              <a href="order.html" className="tf-button mr-25">
                order online now
              </a>
              <div className="hamburger mr-12">
                <img
                  className="icon_hamburger cursor-pointer"
                  src="assets/images/icon/hamburger.png"
                  alt=""
                />
                <div className="content">
                  <div className="icon close_hamburger cursor-pointer">x</div>
                  <h5 className="mb-36 color-3 text-spacing-1">
                    Best Fast Food <br />
                    Delicious And Quality.
                  </h5>
                  <ul className="mb-42 list">
                    <li>
                      <p className="text-spacing-1 uppercase text-500 mb-0 font-1 text-spacing-1">
                        call to order
                      </p>
                      <p className="phone font-1 text-spacing-1">
                        910-344-7520
                      </p>
                    </li>
                    <li className="style">
                      <p className="mb4 font2 color-3">
                        62 Big Tree St, Livonia, New York 14487, USA
                      </p>
                      <p className="font2 color-3">themesflat@gmail.com</p>
                    </li>
                    <li>
                      <p className="mb5 font2 color-3">
                        <span>Monday – Thursday:</span> 8.00am – 21.00pm
                      </p>
                      <p className="mb5 font2 color-3">
                        <span>Friday – Saturday : </span> 9.00am – 22.00pm
                      </p>
                      <p className="mb5 font2 color-3">
                        <span>Sunday:</span> 8.00 – 23.00pm
                      </p>
                      <p className="mb5 font2 color-3">
                        <span>Holiday: </span>
                        <span className="color-2">Closed</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="social-style relative flex items-center justify-center">
                    <li>
                      <a href="#" className="active">
                        <i className="fab fa-facebook-f"></i>
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
                          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a className="flex justify-center mobile-logo">
            <img src="assets/images/logo/logo.png" alt="" />
          </a>
          <div className="mobile-button">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
