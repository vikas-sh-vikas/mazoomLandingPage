import React from "react";
import Accordion from "../accordion/accordion";
import Image from "next/image";

function Feature() {
  return (
    <div className="m-[7rem] mr-0 bg-black rounded-4xl rounded-tr-none rounded-br-none">
      <div className="grid grid-cols-6 my-auto p-[6rem] gap-[3rem]">
        <div className="col-span-4">
          <div className="text-white text-[3rem] text-right mx-[3rem]">
            Want to see how your guest will receive the invite?and how to track
            it ?
          </div>
          <div className="mx-[3rem]">
          <Accordion />
          </div>
        </div>
        <div className="col-span-2"
          style={{
            position: "relative",
            width: "100%",
            height: "600px",
            margin:"auto"
          }}
        >
          <Image
            src={"/feature.avif"}
            alt=""
            fill
            style={{ objectFit: "cover" }} // or 'contain' based on your need
          />
        </div>
      </div>
    </div>
  );
}

export default Feature;
