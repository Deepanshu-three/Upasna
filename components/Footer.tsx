import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Book Appointment</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">Clinic Consultation</a></li>
            <li><a href="#" className="text-sm hover:underline">Video Consultation</a></li>
            <li><a href="#" className="text-sm hover:underline">Tele Consultation</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Online Consultation</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">Consult Now</a></li>
            <li><a href="#" className="text-sm hover:underline">How It Works</a></li>
            <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Instant Call Back</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">Request a Call</a></li>
            <li><a href="#" className="text-sm hover:underline">Submit Query</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Find Nearest Clinic</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">Clinic Locator</a></li>
            <li><a href="#" className="text-sm hover:underline">Top Clinics</a></li>
            <li><a href="#" className="text-sm hover:underline">City-wise Clinics</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 12345 67890</li>
            <li className="flex items-center gap-2"><MdEmail /> info@example.com</li>
            <li className="flex items-center gap-2"><IoLocationSharp /> 123 Clinic Street, City, India</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Follow Us</h3>
          <div className="flex items-center mt-4 space-x-4">
            <a href="#" className="text-[#0C6170] text-xl"><FaFacebook /></a>
            <a href="#" className="text-[#0C6170] text-xl"><FaTwitter /></a>
            <a href="#" className="text-[#0C6170] text-xl"><FaInstagram /></a>
            <a href="#" className="text-[#0C6170] text-xl"><FaLinkedin /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170]">Media Centre</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">News</a></li>
            <li><a href="#" className="text-sm hover:underline">Press Releases</a></li>
            <li><a href="#" className="text-sm hover:underline">Events</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200 pt-8">
        <h3 className="text-lg sm:text-xl font-semibold text-[#0C6170] mt-6">Quick Links</h3>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-center text-sm text-gray-500">
        <p>&copy; 2025 <span className="text-[#0C6170] font-medium">Upasana Homoe</span>. All rights reserved.</p>
        <p className="mt-2">Developed with ❤️ by Upasana Homoe Team</p>
      </div>
    </footer>
  );
}
