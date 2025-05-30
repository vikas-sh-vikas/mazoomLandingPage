import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-[#ec7a30] px-4 sm:px-8 lg:px-32 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Title & Description */}
        <div className="md:col-span-2 flex flex-col items-center sm:items-center md:items-start">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-4">
            Contact us
          </h2>
          <p className="text-white text-base sm:text-lg">
            For more information or inquires please contact us.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 text-lg font-medium text-black hover:text-white bg-white hover:bg-black rounded-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <span className="text-white uppercase text-sm font-medium mb-1">
            Working Hours
          </span>
          <span className="text-white text-lg font-semibold">9 AM — 6 PM</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center sm:items-center md:items-start">
          <span className="text-white uppercase text-sm font-medium mb-1">
            Phone
          </span>
          <a
            href="tel:+9665052787"
            className="text-white text-lg font-semibold hover:underline"
          >
            +966 505 2787
          </a>
        </div>

        {/* Empty / Placeholder for future content */}
        {/* <div></div> */}
      </div>
    </section>
  );
}
