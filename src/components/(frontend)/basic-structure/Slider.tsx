import React from "react";

export default function Slider() {
  return (
    <section className="slider-page relative wow fadeIn" data-wow-delay=".3s">
      <div className="btn-prev-product reverse swiper-btn">
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
      <div className="btn-next-product swiper-btn">
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
      <div className="container">
        <div className="row">
          <div className="col-md-12 tr">
            <div className="swiper-container mySwiper1 visible">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-inner">
                    <div className="image">
                      <img src="assets/images/common/slider_1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="mb-14 uppercase white font_600">
                        Crazy Beefy Burgers
                      </p>
                      <h2 className="capitalize mb-40">
                        Up To 20% <br className="show-desktop" />
                        Off All Products
                      </h2>
                      <div className="flex">
                        <a href="shop-details.html" className="tf-button">
                          view detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-inner">
                    <div className="image">
                      <img src="assets/images/common/slider_2.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="mb-14 uppercase white font_600">
                        Crazy Beefy Burgers
                      </p>
                      <h2 className="capitalize mb-40">
                        Quality Ingredients. <br className="show-desktop" />
                        Quality Burgers.
                      </h2>
                      <div className="flex">
                        <a href="shop-details.html" className="tf-button">
                          view detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-inner">
                    <div className="image">
                      <img src="assets/images/common/slider_3.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="mb-14 uppercase white font_600">
                        Crazy Beefy Burgers
                      </p>
                      <h2 className="capitalize mb-40">
                        Quality Ingredients. <br className="show-desktop" />
                        Quality Burgers.
                      </h2>
                      <div className="flex">
                        <a href="shop-details.html" className="tf-button">
                          view detail
                        </a>
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
