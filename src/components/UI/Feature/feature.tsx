"use client";
import React from "react";
import Accordion from "../accordion/accordion";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <motion.section
      className="bg-black sm:ml-8 md:ml-28 my-16 rounded-3xl md:rounded-tr-none md:rounded-br-none overflow-hidden"
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
            Want to see how your guests receive the invite?
            <br className="block lg:hidden" />
            <span className="inline-block lg:block mt-2">
              and how to track it?
            </span>
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
            src="/feature.avif"
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
  );
}
