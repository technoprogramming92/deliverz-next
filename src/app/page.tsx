"use client";
import React, { useState } from "react";
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

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
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
