'use client'

import React from 'react'
import { Mail, Phone, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 flex flex-col gap-16 px-4 pb-10">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 text-center"
      >
        Wanna get in touch?
      </motion.h1>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white p-10 space-y-10"
      >
        <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
          {/* Email */}
          <div className="flex flex-col items-center space-y-3 text-gray-700">
            <Mail className="w-16 h-16 text-blue-600" />
            <h3 className="text-xl font-semibold">Email</h3>
            <span className="text-lg sm:text-xl text-center">abc@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-3 text-gray-700">
            <Phone className="w-16 h-16 text-blue-600" />
            <h3 className="text-xl font-semibold">Call for Appointment</h3>
            <span className="text-lg sm:text-xl text-center">+91 9876543210</span>
          </div>

          {/* Timings */}
          <div className="flex flex-col items-center space-y-3 text-gray-700">
            <Clock className="w-16 h-16 text-blue-600" />
            <h3 className="text-xl font-semibold">Timings</h3>
            <span className="text-lg sm:text-xl text-center">9:00 AM - 9:00 PM</span>
          </div>
        </div>
      </motion.div>

      {/* Visit Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white p-10 space-y-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
          Visit us at our Clinics
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Clinic 1 */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <h3 className="text-lg font-semibold text-blue-600 text-center">Clinic 1</h3>
            <p className="text-center">123 Wellness Street, Health City, Delhi</p>
            <iframe
              src="https://maps.google.com/maps?q=delhi%20hospital&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg shadow-md"
              loading="lazy"
            ></iframe>
          </div>

          {/* Clinic 2 */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <h3 className="text-lg font-semibold text-blue-600 text-center">Clinic 2</h3>
            <p className="text-center">456 Care Lane, Medical Town, Mumbai</p>
            <iframe
              src="https://maps.google.com/maps?q=mumbai%20clinic&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg shadow-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Clinic Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white p-10 space-y-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700">
          Our Clinic
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="https://source.unsplash.com/800x600/?clinic,interior"
            alt="Clinic 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/800x600/?hospital,room"
            alt="Clinic 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/800x600/?doctor,clinic"
            alt="Clinic 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://source.unsplash.com/800x600/?medical,facility"
            alt="Clinic 4"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default ContactPage
