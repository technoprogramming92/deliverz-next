"use client";

import React from "react";

interface SubscriptionsProps {
  handleAddToCart: (
    id: number,
    name: string,
    price: number,
    image: string
  ) => void;
}

export default function Subscriptions({ handleAddToCart }: SubscriptionsProps) {
  return (
    <section className="bg-6 tf-section pb-104">
      <img
        className="absolute r-0 t-0 wow fadeIn"
        data-wow-delay=".3s"
        src="assets/images/backgroup/icon-bg_2.png"
        alt=""
      />
      <img
        className="absolute l-0 b-0 wow fadeIn"
        data-wow-delay=".3s"
        src="assets/images/backgroup/icon-bg_3.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div
              className="tf-title left pb-30 mb-48 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <p className="sub-title">
                eat freely without worrying about the price
              </p>
              <h2 className="mb-0">Our Thalis</h2>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay=".3s">
            <div className="btn-slider justify-end flex items-center pt-30 mobile-pt0 mobile-justify-start">
              <div className="ic-slider btn-next-product-1 reverse mr-10">
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
                >
                  <g>
                    <path
                      fill="#0c0c0c"
                      fillRule="evenodd"
                      d="M12.346 7.507a.75.75 0 0 1 1.059-.072l4.588 4a.75.75 0 0 1 0 1.13l-4.588 4a.75.75 0 1 1-.986-1.13l3.08-2.685H6.5a.75.75 0 0 1 0-1.5h8.998l-3.08-2.685a.75.75 0 0 1-.072-1.058z"
                      clipRule="evenodd"
                      data-original="#000000"
                      className=""
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="ic-slider btn-prev-product-1">
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
                >
                  <g>
                    <path
                      fill="#0c0c0c"
                      fillRule="evenodd"
                      d="M12.346 7.507a.75.75 0 0 1 1.059-.072l4.588 4a.75.75 0 0 1 0 1.13l-4.588 4a.75.75 0 1 1-.986-1.13l3.08-2.685H6.5a.75.75 0 0 1 0-1.5h8.998l-3.08-2.685a.75.75 0 0 1-.072-1.058z"
                      clipRule="evenodd"
                      data-original="#000000"
                      className=""
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w_1650">
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <div className="swiper-container sl-product-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-item">
                    <span className="price gradient">$260.00</span>
                    <div className="inner">
                      <div className="overlay">
                        <img src="assets/images/backgroup/bg-box.png" alt="" />
                      </div>
                      <div className="overlay-2"></div>
                      <div className="content">
                        <h5 className="title mb-20 color-3 pb-20 ic-botom text-spacing-0_5">
                          <a href="#">Gujarati Tiffin Monthly</a>
                        </h5>

                        <ul>
                          <li>Veg Sabji (10Oz Bowl)</li>
                          <li>Kathod (10Oz Bowl)</li>
                          <li>Dal (10Oz Bowl)</li>
                          <li>Rice (10Oz Bowl)</li>
                          <li>Roti (5)</li>
                          <li>Extra Roti (0.5$/ea)</li>
                        </ul>
                        <div className="flex">
                          <button
                            className="tf-button"
                            onClick={() =>
                              handleAddToCart(
                                1,
                                "Gujarati Tiffin Monthly",
                                260,
                                "assets/images/common/thali-1.png"
                              )
                            }
                          >
                            Add to Cart Combo
                          </button>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/common/thali-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <span className="price gradient">$70.00</span>
                    <div className="inner">
                      <div className="overlay">
                        <img src="assets/images/backgroup/bg-box.png" alt="" />
                      </div>
                      <div className="overlay-2"></div>
                      <div className="content">
                        <h5 className="title mb-20 color-3 pb-20 ic-botom text-spacing-0_5">
                          <a href="#">Gujarati Tiffin Weekly</a>
                        </h5>

                        <ul>
                          <li>Veg Sabji (10Oz Bowl)</li>
                          <li>Kathod (10Oz Bowl)</li>
                          <li>Dal (10Oz Bowl)</li>
                          <li>Rice (10Oz Bowl)</li>
                          <li>Roti (5)</li>
                          <li>Extra Roti (0.5$/ea)</li>
                        </ul>
                        <div className="flex">
                          <button
                            className="tf-button"
                            onClick={() =>
                              handleAddToCart(
                                2,
                                "Gujarati Tiffin Weekly",
                                70,
                                "assets/images/common/thali-1.png"
                              )
                            }
                          >
                            Add to Cart Combo
                          </button>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/common/thali-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <span className="price gradient">$12.00</span>
                    <div className="inner">
                      <div className="overlay">
                        <img src="assets/images/backgroup/bg-box.png" alt="" />
                      </div>
                      <div className="overlay-2"></div>
                      <div className="content">
                        <h5 className="title mb-20 color-3 pb-20 ic-botom">
                          <a href="#">Gujarati Tiffin Daily</a>
                        </h5>

                        <ul>
                          <li>Veg Sabji (10Oz Bowl)</li>
                          <li>Kathod (10Oz Bowl)</li>
                          <li>Dal (10Oz Bowl)</li>
                          <li>Rice (10Oz Bowl)</li>
                          <li>Roti (5)</li>
                          <li>Extra Roti (0.5$/ea)</li>
                        </ul>
                        <div className="flex">
                          <button
                            className="tf-button"
                            onClick={() =>
                              handleAddToCart(
                                2,
                                "Gujarati Tiffin Daily",
                                12,
                                "assets/images/common/thali-1.png"
                              )
                            }
                          >
                            Add to Cart Combo
                          </button>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/common/thali-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <span className="price gradient">$10.00</span>
                    <div className="inner">
                      <div className="overlay">
                        <img src="assets/images/backgroup/bg-box.png" alt="" />
                      </div>
                      <div className="overlay-2"></div>
                      <div className="content">
                        <h5 className="title mb-20 color-3 pb-20 ic-botom">
                          <a href="#">Gujarati Tiffin Take Away</a>
                        </h5>

                        <ul>
                          <li>Veg Sabji (10Oz Bowl)</li>
                          <li>Kathod (10Oz Bowl)</li>
                          <li>Dal (10Oz Bowl)</li>
                          <li>Rice (10Oz Bowl)</li>
                          <li>Roti (5)</li>
                          <li>Extra Roti (0.5$/ea)</li>
                        </ul>
                        <div className="flex">
                          <button
                            className="tf-button"
                            onClick={() =>
                              handleAddToCart(
                                2,
                                "Gujarati Tiffin Take Away",
                                10,
                                "assets/images/common/thali-1.png"
                              )
                            }
                          >
                            Add to Cart Combo
                          </button>
                        </div>
                      </div>
                      <div className="image">
                        <img src="assets/images/common/thali-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
