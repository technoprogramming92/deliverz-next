"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/(frontend)/basic-structure/About";
import Categories from "@/components/(frontend)/basic-structure/Categories";
import DeliveryBanner from "@/components/(frontend)/basic-structure/DeliveryBanner";
import EmailSubscription from "@/components/(frontend)/basic-structure/EmailSubscription";
import Footer from "@/components/(frontend)/basic-structure/Footer";
import Header from "@/components/(frontend)/basic-structure/Header";
import Slider from "@/components/(frontend)/basic-structure/Slider";
import Speciality from "@/components/(frontend)/basic-structure/Speciality";
import Subscriptions from "@/components/(frontend)/basic-structure/Subscriptions";
import Testimonials from "@/components/(frontend)/basic-structure/Testimonials";
import Topbar from "@/components/(frontend)/basic-structure/Topbar";
import Cart from "@/components/(frontend)/basic-structure/Cart";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface User {
  firstName: string;
  lastName: string;
  profilePic?: string;
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleAddToCart = (
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { id, name, price, image, quantity: 1 }];
    });
    setShowCart(true); // ✅ Show the cart modal after adding item
  };

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      fetch("/api/auth/me", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Send cookies with request
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser({
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              profilePic:
                data.user.profilePic || "/assets/images/user-placeholder.png",
            });

            // ✅ Store user data in localStorage for persistence
            localStorage.setItem("user", JSON.stringify(data.user));
          }
        })
        .catch(() => setUser(null));
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleLogout = () => {
    deleteCookie("token", { path: "/" });
    setUser(null);
    localStorage.removeItem("user"); // ✅ Remove from localStorage
  };

  return (
    <div id="wrapper">
      <Topbar cartItems={cartItems} setShowCart={setShowCart} />

      <Header />
      <Slider />
      <Speciality />
      <Categories />
      <Subscriptions handleAddToCart={handleAddToCart} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          setShowCart={setShowCart}
        />
      )}
      <About />
      <Testimonials />
      <DeliveryBanner />
      <EmailSubscription />
      <Footer />
    </div>
  );
}
