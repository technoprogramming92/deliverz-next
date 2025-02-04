import React from "react";

export default function EmailSubscription() {
  return (
    <section className="mt-12 mb-12">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <div className="subscribe style1 flex items-center radius-20 gradient-6">
              <div className="icon">
                <img
                  className="ring"
                  src="assets/images/icon/ring.png"
                  alt=""
                />
              </div>
              <div className="content">
                <h4 className="mb-12 text-spacing-0_5">
                  Subscribe to receive <br className="show-desktop" />
                  news & promotions from us
                </h4>
                <p className="white">We promise not to spam your inbox.</p>
              </div>
              <div className="form">
                <form action="#">
                  <input
                    type="text"
                    name="inp"
                    placeholder="Email adress..."
                    required
                  />
                  <button>
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
                          fill="#000000"
                          d="M22.101 10.562 2.753 1.123A1.219 1.219 0 0 0 1 2.22v.035a2 2 0 0 0 .06.485l1.856 7.424a.5.5 0 0 0 .43.375l8.157.907a.559.559 0 0 1 0 1.11l-8.157.907a.5.5 0 0 0-.43.375L1.06 21.261a2 2 0 0 0-.06.485v.035a1.219 1.219 0 0 0 1.753 1.096L22.1 13.438a1.6 1.6 0 0 0 0-2.876z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
