import React from "react";

function ContactUs() {
  return (
    <div className="bg-[#ec7a30] px-[7rem] py-[2rem]">
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <div className="text-white text-[3rem]">Contact us</div>
          <div className="text-white">
            For more information or inquires please contact us.
          </div>
          <div className="pt-12">
            <button className="px-16 py-3 text-lg text-black rounded-full bg-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="m-auto">
          <div className="text-white">Working hours</div>
          <div className="text-lg text-white">9 AM — 6 PM</div>
        </div>
        <div className="m-auto">
          <div className="text-white">Phone</div>
          <div className="text-lg text-white"> +966 505 2787</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ContactUs;
