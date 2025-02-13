"use client";

import React, { useState } from "react";
import { setCookie, deleteCookie } from "cookies-next";

interface AuthModalProps {
  onClose: () => void;
  onLoginSuccess: (user: {
    firstName: string;
    lastName: string;
    profilePic?: string;
  }) => void;
}

export default function AuthModal({ onClose, onLoginSuccess }: AuthModalProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emailOrPhone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const endpoint = isSignup ? "/api/auth/register" : "/api/auth/login";

      const payload = isSignup
        ? {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }
        : {
            emailOrPhone: formData.emailOrPhone,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.error || "Something went wrong!");
        return;
      }

      if (!isSignup) {
        setCookie("token", data.token, { path: "/", maxAge: 7 * 24 * 60 * 60 });
        onLoginSuccess({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          profilePic: "/assets/images/avatar.jpg",
        });
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => onClose(), 1500); // Close modal after success message
      } else {
        setSuccessMessage("Registration successful! You can now log in.");
      }
    } catch (err) {
      setError("Failed to connect to server!");
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">{isSignup ? "Sign Up" : "Login"}</h2>

        {error && <p className="modal-error">{error}</p>}
        {successMessage && <p className="modal-success">{successMessage}</p>}

        <form className="modal-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
            </>
          )}

          {!isSignup && (
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone"
              required
              onChange={handleChange}
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="modal-button" disabled={loading}>
            {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="modal-switch">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
