import React from "react";

export default function Topbar() {
  return (
    <div className="topbar style">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <div className="topbar-inner flex">
              <div className="topbar__logo mt3">
                <a href="home-01.html">
                  <img src="assets/images/logo/logo.png" alt="" />
                </a>
              </div>

              <div className="topbar-info">
                <div className="flex items-center pr-30 tablet-r-auto hide-mobile hide-mobile">
                  <div className="icon mr-15">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <ul className="phone">
                    <li>
                      <p>Call and Order in</p>
                      <p>910-344-7520</p>
                    </li>
                  </ul>
                </div>
                <div className="mr-25 hide-tablet">
                  <img src="assets/images/icon/dashed.png" alt="" />
                </div>
                <ul className="action gradient">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                            fill="#ffffff"
                            data-original="#ffffff"
                            className=""
                            opacity="1"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li className="flat-show-search">
                    <a href="#" className="show-search">
                      <svg
                        className=""
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 118.783 118.783"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            d="M115.97 101.597 88.661 74.286a47.75 47.75 0 0 0 7.333-25.488c0-26.509-21.49-47.996-47.998-47.996S0 22.289 0 48.798c0 26.51 21.487 47.995 47.996 47.995a47.776 47.776 0 0 0 27.414-8.605l26.984 26.986a9.574 9.574 0 0 0 6.788 2.806 9.58 9.58 0 0 0 6.791-2.806 9.602 9.602 0 0 0-.003-13.577zM47.996 81.243c-17.917 0-32.443-14.525-32.443-32.443s14.526-32.444 32.443-32.444c17.918 0 32.443 14.526 32.443 32.444S65.914 81.243 47.996 81.243z"
                            fill="#000000"
                            data-original="#000000"
                            className=""
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="top-search">
                      <form action="#" id="searchform-all" method="get">
                        <div>
                          <input
                            type="text"
                            id="s"
                            className="sss"
                            placeholder="Search..."
                          />
                          <button type="submit" id="searchsubmit">
                            <svg
                              className=""
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="512"
                              height="512"
                              x="0"
                              y="0"
                              viewBox="0 0 118.783 118.783"
                              enableBackground="new 0 0 512 512"
                              xmlSpace="preserve"
                            >
                              <g>
                                <path
                                  d="M115.97 101.597 88.661 74.286a47.75 47.75 0 0 0 7.333-25.488c0-26.509-21.49-47.996-47.998-47.996S0 22.289 0 48.798c0 26.51 21.487 47.995 47.996 47.995a47.776 47.776 0 0 0 27.414-8.605l26.984 26.986a9.574 9.574 0 0 0 6.788 2.806 9.58 9.58 0 0 0 6.791-2.806 9.602 9.602 0 0 0-.003-13.577zM47.996 81.243c-17.917 0-32.443-14.525-32.443-32.443s14.526-32.444 32.443-32.444c17.918 0 32.443 14.526 32.443 32.444S65.914 81.243 47.996 81.243z"
                                  fill="#000000"
                                  data-original="#000000"
                                  className=""
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="cart relative">
                    <a href="#" className="icon_cart active">
                      <span className="number">3</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                            fill="#ffffff"
                            data-original="#000000"
                            className=""
                            opacity="1"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="content">
                      <div className="ic close_cart cursor-pointer">x</div>
                      <div className="cart-item">
                        <div className="img">
                          <img src="assets/images/common/item_42.png" alt="" />
                        </div>
                        <div className="inner">
                          <p className="pricing">$15.22</p>
                          <h6 className="color-3 mb-0">
                            <a href="shop-details.html">Brekkie BBQ Burger</a>
                          </h6>
                        </div>
                      </div>
                      <div className="cart-item">
                        <div className="img">
                          <img src="assets/images/common/item_43.png" alt="" />
                        </div>
                        <div className="inner">
                          <p className="pricing">$15.22</p>
                          <h6 className="color-3 mb-0">
                            <a href="shop-details.html">
                              Smoked Brisket Sandwich
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="cart-item">
                        <div className="img">
                          <img src="assets/images/common/item_44.png" alt="" />
                        </div>
                        <div className="inner">
                          <p className="pricing">$15.22</p>
                          <h6 className="color-3 mb-0">
                            <a href="shop-details.html">
                              Canada Dry Ginger Ale
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z"
                            fill="#ffffff"
                            data-original="#000000"
                            className=""
                            opacity="1"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
