"use client"
import React from "react";
import { motion } from "framer-motion";

// Variants for container and cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f9d1b7",
  },
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { yoyo: Infinity, duration: 0.6 },
  },
};

function Pricing() {
  const plans = [
    { title: "Basic Package", price: "79 SAR" },
    { title: "Pro Package", price: "149 SAR" },
    { title: "Enterprise Package", price: "299 SAR" },
  ];

  const features = [
    "Send invites via WhatsApp or email",
    "Customizable templates",
    "Real-time RSVP tracking",
    "Automated reminders",
    "24/7 Support",
  ];

  return (
    <div id="Pricing" className="max-w-5xl m-auto py-16">
      <motion.div
        className="text-[3.5rem] text-center pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose the plan that works for you
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            className="border-gray-300 border-2 rounded-3xl p-8 text-center bg-white"
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="show"
          >
            <div className="text-xl font-semibold mb-2">{plan.title}</div>
            <div className="font-semibold text-sm text-gray-600 mb-4">
              Starting from {plan.price}
            </div>
            <hr className="mb-4" />
            <ol className="list-disc list-inside pl-5 space-y-2 mb-8 text-left">
              {features.map((feat, i) => (
                <li key={i} className="text-lg">
                  {feat}
                </li>
              ))}
            </ol>
            <motion.button
              className="font-semibold w-full rounded-full border py-3"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              Try for free
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pricing;
