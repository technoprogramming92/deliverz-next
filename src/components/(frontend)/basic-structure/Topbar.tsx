"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";
import { getCookie, deleteCookie } from "cookies-next";
import { Chip } from "@heroui/react";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";

interface TopbarProps {
  cartItems: any[];
  setShowCart: (value: boolean) => void;
}

export default function Topbar({ cartItems, setShowCart }: TopbarProps) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    profilePic?: string;
  } | null>(null);

  // ✅ Restore user session on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const token = getCookie("token");
    if (token) {
      fetch("/api/auth/me", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
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
            localStorage.setItem("user", JSON.stringify(data.user));
          }
        })
        .catch(() => setUser(null));
    }
  }, []);

  // ✅ Logout Function
  const handleLogout = () => {
    deleteCookie("token", { path: "/" });
    localStorage.removeItem("user"); // ✅ Remove user data from storage
    setUser(null);
  };

  return (
    <div className="topbar style">
      <div className="container w_1200">
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay=".3s">
            <div className="topbar-inner flex">
              <div className="topbar__logo mt3">
                <Link href="/">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="topbar-info">
                <div className="flex items-center pr-30 tablet-r-auto hide-mobile">
                  <div className="icon mr-15">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <ul className="phone">
                    <li>
                      <p>Call and Order in</p>
                      <p>+1 416-261-8480</p>
                    </li>
                  </ul>
                </div>
                <div className="mr-25 hide-tablet">
                  <img src="assets/images/icon/dashed.png" alt="" />
                </div>
                <Chip
                  color="primary"
                  variant="light"
                  size="lg"
                  className="p-4 shadow-md"
                >
                  <ul className="action  space-y-4">
                    {/* ✅ Login / Logout Button */}
                    {user ? (
                      <li className="user-info flex items-center space-x-3">
                        <Badge color="primary" content="5">
                          <Avatar
                            isBordered
                            radius="md"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                          />
                        </Badge>
                        <Chip color="warning" variant="bordered">
                          <div className="user-details">
                            <span className="user-name font-bold text-gray-900">{`${user.firstName} ${user.lastName}`}</span>
                          </div>
                        </Chip>
                        {/* <div className="user-container flex items-center space-x-2">
                          <img
                            src={
                              user.profilePic ||
                              "/assets/images/user-placeholder.png"
                            }
                            alt="User"
                            className="user-avatar w-10 h-10 rounded-full border border-gray-300"
                          />
                          <div className="user-details">
                            <span className="user-name font-bold text-gray-900">{`${user.firstName} ${user.lastName}`}</span>
                          </div>
                        </div> */}
                        <button
                          className="logout-btn bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <li>
                        <button
                          className="login-btn bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                          onClick={() => setShowModal(true)}
                        >
                          Login
                        </button>
                      </li>
                    )}

                    {/* ✅ Cart Button */}
                    <li
                      className="cart relative"
                      onClick={() => setShowCart(true)}
                    >
                      <button className="icon_cart active flex items-center space-x-2 cursor-pointer">
                        {cartItems.length > 0 && (
                          <span className="number bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cartItems.length}
                          </span>
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current text-gray-700 hover:text-green-600"
                        >
                          <path d="M1 1a1 1 0 1 0 0 2h1.78a.7.7 0 0 1 .66.47l3.3 9.89c.15.44.17.91.05 1.36l-.27 1.09C6.1 17.41 7.36 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.54-.7l.2-.82a.64.64 0 0 1 .62-.49H20a1 1 0 0 0 .95-.68l2.66-8A1 1 0 0 0 22.66 5H6.55a.7.7 0 0 1-.66-.47L4.95 1.7A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                        <span className="text-sm font-semibold">Cart</span>
                      </button>
                    </li>
                  </ul>
                </Chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Show Auth Modal when needed */}
      {showModal && (
        <AuthModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={(userData) => {
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData)); // ✅ Store user data on login
          }}
        />
      )}
    </div>
  );
}
