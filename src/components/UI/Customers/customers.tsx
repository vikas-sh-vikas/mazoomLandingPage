"use client";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Accordion from "../accordion/accordion";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A new and very sophisticated idea.",
    feedback:
      "I enjoyed my experience with Mazoom. The invitations were so much easier!",
    author: "manalq00 - Apple Store review",
  },
  {
    quote: "The first choice for every occasion!✅",
    feedback:
      "The idea is really smart, I have received more than one invitation from my friends’ weddings through them. The process is very easy to deal with, and the best thing is that they have the reminder feature before the occasion for a few days to confirm all attendees and also the feature of sending the location. Really, the application saved us the trouble of searching for traditional cards and their high prices👍🏻",
    author: "SaraKhalid97 - Apple Store review",
  },
  {
    quote: "An excellent program 👌.",
    feedback:
      "The nice thing about it is the feature of accepting or rejecting, which lets you know who is attending and who is not 😍.",
    author: "hayat121212 - Apple Store review",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Customers() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What our customers say about us
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between border border-gray-300 rounded-2xl overflow-hidden shadow-lg bg-white"
            custom={idx}
            variants={cardVariants}
          >
            <div className="p-8">
              <FaQuoteRight size={"30px"} className="text-[#ec7a30] mb-4" />
              <p className="text-md font-semibold text-right mb-2">{t.quote}</p>
              <p className="text-sm text-right text-gray-600">{t.feedback}</p>
            </div>
            <div className="bg-[#ec7a30] text-white px-6 py-4 text-sm">
              {t.author}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.section
        className="bg-black my-16 rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-8 sm:p-12 lg:p-16 items-center">
          {/* Text + Accordion */}
          <div className="lg:col-span-4 space-y-6">
            <motion.h2
              className="text-white text-2xl sm:text-3xl md:text-4xl text-center lg:text-right leading-snug"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              All you need to manage your
              <br className="block lg:hidden" />
              <span className="inline-block lg:block mt-2">events </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Accordion />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="relative w-full aspect-[4/4] lg:col-span-2 rounded-xl overflow-hidden h-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Image
              src="/Customers.gif"
              alt="Feature illustration"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              priority
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
