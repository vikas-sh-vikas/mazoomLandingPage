import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Accordion from "../accordion/accordion";
import Image from "next/image";
function Customers() {
  return (
    <div>
      <div className="pb-[6rem]">
        <div className="text-[3.5rem] text-center">
          What our customers say about us
        </div>
        <div className="grid grid-cols-3 pt-[6rem] gap-8">
          <div className="border-gray-300 border-2 rounded-2xl">
            <div className="p-12">
              <FaQuoteRight size={"40px"} className="text-[#ec7a30]" />
              <div className="py-8">
                <div className="font-semibold  text-right">
                  A new and very sophisticated idea.
                </div>
                <div className="text-right">
                  I enjoyed my experience with Mazoom. The invitations a lot
                  were easier!
                </div>
              </div>
            </div>
            <div className="bg-[#ec7a30] text-white px-8 py-6 rounded-b-2xl">
              manalq00 - Apple Store review
            </div>
          </div>
          <div className="border-gray-300 border-2 rounded-2xl">
            <div className="p-12">
              <FaQuoteRight size={"40px"} className="text-[#ec7a30]" />
              <div className="py-8">
                <div className="font-semibold  text-right">
                  A new and very sophisticated idea.
                </div>
                <div className="text-right">
                  I enjoyed my experience with Mazoom. The invitations a lot
                  were easier!
                </div>
              </div>
            </div>
            <div className="bg-[#ec7a30] text-white px-8 py-6 rounded-b-2xl">
              manalq00 - Apple Store review
            </div>
          </div>
          <div className="border-gray-300 border-2 rounded-2xl">
            <div className="p-12">
              <FaQuoteRight size={"40px"} className="text-[#ec7a30]" />
              <div className="py-8">
                <div className="font-semibold  text-right">
                  A new and very sophisticated idea.
                </div>
                <div className="text-right">
                  I enjoyed my experience with Mazoom. The invitations a lot
                  were easier!
                </div>
              </div>
            </div>
            <div className="bg-[#ec7a30] text-white px-8 py-6 rounded-b-2xl">
              manalq00 - Apple Store review
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black m-[7rem] py-[7rem] rounded-4xl">
        <div className="grid grid-cols-6 my-auto p-[6rem] gap-[3rem]">
          <div className="col-span-4">
            <div className="text-white text-[3rem] text-right mx-[3rem]">
              Want to see how your guest will receive the invite?and how to
              track it ?
            </div>
            <div className="mx-[3rem]">
              <Accordion />
            </div>
          </div>
          <div
            className="col-span-2"
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
              margin: "auto",
            }}
          >
            <Image
              src={"/Customers.gif"}
              alt=""
              fill
              style={{ objectFit: "cover" }} // or 'contain' based on your need
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
