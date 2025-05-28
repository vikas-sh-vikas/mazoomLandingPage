import Image from "next/image";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function HomeBanner() {
  return (
    <div className="mx-[7rem]">
      <div className="grid grid-cols-5 mx-[6rem] gap-[4rem]">
        <div className="col-span-3 my-auto">
          <div className="text-[3.5rem] m-auto text-right pb-[3.5rem]">
            Mazoom invitations Best way to invite
          </div>
          <div className="text-[1.2rem] text-right pb-[3rem]">
            Your guests will enjoy high privacy and hassle-free use without any
            app downloads or links. Elevate your event planning today with us.
          </div>
          <div className="flex justify-end gap-3 pb-4">
            <button className="flex gap-3 items-center bg-black text-white text-lg px-7 py-3 rounded-full">
              <FaGooglePlay size={"24"} />
              Google Play
            </button>
            <button className="flex gap-3 items-center bg-black text-white text-lg px-7 py-3 rounded-full">
              <FaApple size={"24"} />
              App Store
            </button>
          </div>
          <div className="text-end mr-20">
            <button className="bg-[#ec7a30] px-16 py-3 text-lg text-white rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        {/* <div className="h-[200px]"> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "700px",
            transform: "rotate(-3deg)", // rotate slightly to the left
            overflow: "hidden", // optional, hides overflow from rotation
          }}
          className="col-span-2"
        >
          {" "}
          <Image
            alt={"banner-gif"}
            src={"/bannergig.gif"}
            fill // This makes the image fill the parent
            style={{ objectFit: "cover" }} // or 'contain' based on your need
            priority // optional, for better loading of important images
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
