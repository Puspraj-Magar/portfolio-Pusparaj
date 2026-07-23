import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { portfolioData } from "../data/portfolioData";

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Backend URL
  const BACKEND_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear old messages while typing
    setError("");
    setSuccess("");
  };

  // Validate form
  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      return "Please enter your name.";
    }

    if (!email) {
      return "Please enter your email address.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!message) {
      return "Please enter a message.";
    }

    return "";
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.message || "Unable to send message."
        );
      }

      // Show success message
      setSuccess("Your message has been sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error) {
      console.error("Contact error:", error);

      setError(error.message || "Unable to reach the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Let's connect and build something great together"
    >
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-5">

          {/* Email */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <FaEnvelope className="text-indigo-300 w-5 text-center" />

              <a
                href={portfolioData.contact.email.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {portfolioData.contact.email.text}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <FaPhone className="text-indigo-300 w-5 text-center" />

              <a
                href={portfolioData.contact.phone.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {portfolioData.contact.phone.text}
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <FaGithub className="text-indigo-300 w-5 text-center" />

              <a
                href={portfolioData.contact.github.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {portfolioData.contact.github.text}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-3 text-white/70 text-sm">
              <FaLinkedinIn className="text-indigo-300 w-5 text-center" />

              <a
                href={portfolioData.contact.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {portfolioData.contact.linkedin.text}
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">

          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 md:p-3 border border-white/5"
          >
            <div className="space-y-4">

              {/* Name */}
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-white/40 text-sm font-medium block mb-1.5">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input w-full rounded-xl px-4 py-3 text-white/90 placeholder:text-white/20 resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-indigo-500/90 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FaPaperPlane />

                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm bg-red-500/10 py-2 rounded-xl border border-red-500/20"
                >
                  <FaExclamationCircle className="inline mr-1.5" />

                  {error}
                </motion.div>
              )}

              {/* Success Message */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm bg-green-500/10 py-2 rounded-xl border border-green-500/20"
                >
                  <FaCheckCircle className="inline mr-1.5" />

                  {success}
                </motion.div>
              )}

            </div>
          </form>

        </div>
      </div>
    </Section>
  );
}