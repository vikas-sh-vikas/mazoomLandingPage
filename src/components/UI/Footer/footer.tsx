import React from "react";
import { FaGoogle, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

function Footer() {
  return (
    <div className="bg-black grid grid-cols-5 p-4 px-[2rem]">
      <div className="col-span-4">
        <Image src={"/footer-logo.avif"} alt="footer-logo" height={50} width={100}/>
        <div className="text-white">
          Mazoom Company - Riyadh, Saudi Arabia At Takhassusi Street{" "}
        </div>
      </div>
      <div>
        <ul className="pb-8">
          <li className="text-white">Terms of use</li>
          <li className="text-white">Privacy policy</li>
          <li className="text-white">Connect with us here</li>
        </ul>
        <div className="flex gap-2">
          <div className="bg-white rounded-full p-2">
            <FaGoogle />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaInstagram />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
