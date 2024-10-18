import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <footer className="bg-[#4b2e2b] text-white py-8 mt-5">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a business committed to providing high-quality products
                and excellent customer service. Discover our story and see why
                our customers love us.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 flex text-3xl gap-2">
                <a href="www.instagram.com">
                  <FaInstagram />
                </a>

                <a href="">
                  <FaWhatsapp />
                </a>
                <a href="" >
                <FaXTwitter  />

                </a>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">1234 Main Street</p>
              <p className="text-gray-400">City, State, ZIP</p>
              <p className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="hover:text-gray-400"
                >
                  info@example.com
                </a>
              </p>
              <p className="text-gray-400">
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-gray-400">
                  (123) 456-7890
                </a>
              </p>
            </div>

            {/* Social Media & Newsletter Signup */}
            <div>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-facebook-f"></i>{" "}
                  {/* Font Awesome Facebook icon */}
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-twitter"></i>{" "}
                  {/* Font Awesome Twitter icon */}
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-instagram"></i>{" "}
                  {/* Font Awesome Instagram icon */}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
            {/* <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
