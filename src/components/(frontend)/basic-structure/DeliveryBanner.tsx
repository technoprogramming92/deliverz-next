import React from "react";

export default function DeliveryBanner() {
  return (
    <section className="banner-1">
      <div className="overlay"></div>
      <div className="container w_1920 pd0">
        <div className="row">
          <div className="col-md-12 flex items-center">
            <div className="wrap-banner flex items-center">
              <div className="image w-60 wow fadeIn" data-wow-delay=".3s">
                <img
                  className="move3"
                  src="assets/images/common/item_16.png"
                  alt=""
                />
              </div>
              <div className="content wow fadeIn" data-wow-delay=".5s">
                <p>Big Offers</p>
                <p>Free Delivery</p>
                <p>Order! Order!</p>
                <div className="flex">
                  <a
                    href="order.html"
                    className="tf-button style2 flex items-center"
                  >
                    order now today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
