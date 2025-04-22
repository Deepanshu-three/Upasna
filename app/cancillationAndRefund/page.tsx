"use client";

import React from "react";
import { motion } from "framer-motion";

const RefundAndCancellationPage = () => {
  return (
    <motion.div
      className="min-h-screen py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-medium text-center text-[#0C6170] mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Refund & Cancellation Policy
        </motion.h1>

        <motion.div
          className="p-6 space-y-4 border border-[#0C6170] shadow-xl rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At Upasana Homoeo, we strive to provide the best care and experience
            to our patients. We understand that sometimes appointments may need
            to be cancelled, and we&apos;ve outlined a fair policy below.
          </motion.p>

          <motion.h2
            className="text-2xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Appointment Cancellation
          </motion.h2>
          <p>
            Appointments can be cancelled{" "}
            <strong>only after the appointment link has been shared</strong> via
            Google Meet on WhatsApp. This ensures that both the patient and the
            practitioner have confirmed the session timing and availability.
          </p>

          <motion.h2
            className="text-2xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Refund Policy
          </motion.h2>
          <p>
            In the event of a cancellation after the appointment link has been
            shared, <strong>a 20% cancellation charge</strong> will be deducted
            from the total booking amount. The remaining 80% will be refunded to
            the original payment method within 5–7 business days.
          </p>

          <motion.h2
            className="text-2xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            How to Request a Cancellation
          </motion.h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Message us on WhatsApp with your name and appointment details.</li>
            <li>Ensure the Google Meet link has already been shared before cancellation.</li>
            <li>Our support team will confirm your cancellation and process your refund accordingly.</li>
          </ul>

          <motion.h2
            className="text-2xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Contact Support
          </motion.h2>
          <p>
            For any questions or concerns related to cancellations or refunds,
            please contact our support team at{" "}
            <a
              href="mailto:upasnahomeo@gmail.com"
              className="text-blue-600 underline"
            >
              upasnahomeo@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RefundAndCancellationPage;
