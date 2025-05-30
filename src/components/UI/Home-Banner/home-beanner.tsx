"use client";
import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <div className="px-4 sm:px-8 md:px-[7rem]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          className="md:col-span-3 text-center md:text-right space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem]"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Mazoom invitations<br></br>
            Best way to invite
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your guests will enjoy high privacy and hassle-free use without any
            app downloads or links. Elevate your event planning today with us.
          </motion.p>

          {/* App Buttons */}
          <motion.div
            className="flex justify-center md:justify-end gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="flex gap-3 items-center bg-black text-white text-base sm:text-lg px-6 py-3 rounded-full shadow-lg">
              <FaGooglePlay size={20} />
              Google Play
            </button>
            <button className="flex gap-3 items-center bg-black text-white text-base sm:text-lg px-6 py-3 rounded-full shadow-lg">
              <FaApple size={20} />
              App Store
            </button>
          </motion.div>

          {/* Contact Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button className="bg-[#ec7a30] hover:bg-[#d46823] transition-colors px-10 sm:px-16 py-3 text-white text-base sm:text-lg rounded-full shadow-md">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full h-full sm:h-[500px] md:h-[800px] md:col-span-2 overflow-visible"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            transformOrigin: "center center",
            // Optional padding so the rotated edges don't bump the grid gap:
            padding: "2rem",
          }}
        >
          <Image
            alt="banner-gif"
            src="/bannergig.gif"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",              transform: "rotate(-2deg)",
            }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HomeBanner;
