"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AuthModal from "./AuthModal";
import { getCookie, deleteCookie } from "cookies-next";

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
                <ul className="action gradient">
                  {/* ✅ Login / Logout Button */}
                  {user ? (
                    <li className="user-info">
                      <div className="user-container">
                        <img
                          src={user.profilePic}
                          alt="User"
                          className="user-avatar"
                        />
                        <span className="user-name">{`${user.firstName} ${user.lastName}`}</span>
                      </div>
                      <button className="logout-btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        className="login-btn"
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
                    <a href="#" className="icon_cart active">
                      {cartItems.length > 0 && (
                        <span className="number">{cartItems.length}</span>
                      )}
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
                            d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
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
