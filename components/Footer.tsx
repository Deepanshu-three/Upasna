import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Booking & Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Book Appointment</h3>
          <p className="text-gray-700">We care for your wellness</p>
          <h3 className="text-xl font-semibold text-blue-600">Online Consultation</h3>
          <p className="text-gray-700">Distance does not matter for cure</p>
          <h3 className="text-xl font-semibold text-blue-600">Instant Call Back</h3>
          <p className="text-gray-700">We are here for you whenever you need us</p>
          <h3 className="text-xl font-semibold text-blue-600">Find Nearest Clinic</h3>
          <p className="text-gray-700">Explore nearby clinics and schedule your visit effortlessly.</p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Contact Us</h3>
          <p className="text-gray-700">📞 978 059 7813</p>
          <p className="text-gray-700">📧 info@afectoclinic.com</p>
          <p className="text-gray-700">🕒 Mon to Sat: 10 AM - 7 PM</p>
          <p className="text-gray-700">🕒 Mon to Sun: 10 AM - 7 PM (Delhi - Wednesday Closed)</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-blue-600 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-blue-600 text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-blue-600 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-blue-600 text-2xl"><FaYoutube /></a>
          </div>
        </div>

        {/* Media & Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">Media Centre</h3>
          <ul className="text-gray-700 space-y-2">
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Media Kit</a></li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600 mt-6">Quick Links</h3>
          <ul className="text-gray-700 space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Complaint/Feedback</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* About & Services */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-600">About Afecto®</h3>
          <ul className="text-gray-700 space-y-2">
            <li><a href="#">About Afecto Homeopathy®</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">Our Values</a></li>
            <li><a href="#">Vision & Mission</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Kids BEAR</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Treatment Results</a></li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Copyright Section */}
      <div className="text-center text-gray-600 mt-4">
        © {new Date().getFullYear()} Afecto Homeopathy® - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
