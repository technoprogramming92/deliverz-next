"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import Topbar from "@/components/(frontend)/basic-structure/Topbar";
import Header from "@/components/(frontend)/basic-structure/Header";
import Footer from "@/components/(frontend)/basic-structure/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Checkout() {
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  } | null>(null);

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
    latitude: "",
    longitude: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Retrieve cart from localStorage on page load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Fetch User Data
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      fetch("/api/auth/me")
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user);
            setShippingDetails((prev) => ({
              ...prev,
              name: `${data.user.firstName} ${data.user.lastName}`,
              email: data.user.email,
              phone: data.user.phone || "",
            }));
          }
        })
        .catch(() => setUser(null));
    }
  }, []);

  // ✅ Fetch Location when clicking the button
  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setShippingDetails((prev) => ({
              ...prev,
              address: data.display_name || "Location Not Found",
              latitude: latitude.toString(),
              longitude: longitude.toString(),
            }));
          } catch {
            setError("Failed to fetch location.");
          }
        },
        () => setError("Location access denied.")
      );
    }
  };

  // ✅ Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  // ✅ Handle Order Submission
  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !shippingDetails.address ||
      !shippingDetails.city ||
      !shippingDetails.pincode
    ) {
      setError("All shipping fields are required.");
      setLoading(false);
      return;
    }

    const orderData = {
      user: user ? user.email : "Guest",
      items: cartItems,
      shippingDetails,
      total: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };

    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Order failed!");

      localStorage.removeItem("cart"); // ✅ Clear cart after order
      setCartItems([]);
      router.push(`/order-confirmation?orderId=${data.orderId}`);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <Topbar cartItems={cartItems} setShowCart={setShowCart} />
      <Header />

      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-grid">
          {/* 🚚 Left Side - Shipping Details Form */}
          <div className="checkout-left">
            <h3>Shipping Details</h3>
            <form className="shipping-form" onSubmit={handleOrderSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingDetails.name}
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shippingDetails.email}
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={shippingDetails.phone}
                required
                onChange={handleChange}
              />

              <div className="address-container">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={shippingDetails.address}
                  required
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="location-btn"
                  onClick={fetchUserLocation}
                >
                  📍 Get Location
                </button>
              </div>

              <input
                type="text"
                name="city"
                placeholder="City"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                required
                onChange={handleChange}
              />

              <h3>Payment Method</h3>
              <select
                name="paymentMethod"
                value={shippingDetails.paymentMethod}
                onChange={handleChange}
              >
                <option value="COD">Cash on Delivery</option>
                <option value="Online">Online Payment</option>
              </select>

              {error && <p className="checkout-error">{error}</p>}
              <button type="submit" className="checkout-btn" disabled={loading}>
                {loading ? "Processing..." : "Proceed to Order"}
              </button>
            </form>
          </div>

          {/* 🛒 Right Side - Order Summary */}
          <div className="checkout-right">
            <h3>Order Summary</h3>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="order-item">
                  <img src={item.image} alt={item.name} className="order-img" />
                  <div className="order-details">
                    <p className="order-name">
                      <strong>{item.name}</strong>
                    </p>
                    <p className="order-price">Quantity: {item.quantity}</p>
                    <p className="order-price">Price: ${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart-message">Your cart is empty.</p>
            )}
            <p className="order-total">
              <strong>Total:</strong> $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ) || 0}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
