import React from "react";
import Image from "next/image";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function Header() {
  return (
    <div className="grid grid-cols-6 mt-2 px-[2rem] sticky top-0 bg-white z-10">
      <div className="m-auto">
        <Image alt={"logo"} src={"/next.svg"} height={75} width={150}></Image>
      </div>
      <div className="flex justify-center gap-2 col-span-4 bg-white border border-gray-200 shadow-[0_4px_6px_-2px_rgba(236,122,48,0.3)] rounded-full px-8 py-3 items-center space-x-6 transition-shadow duration-200 ease-in-out">
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Log In
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Home
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Try Mazoom Invitation
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Features
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Customers
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Pricing
        </div>
        <div className="text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer">
          Contact us
        </div>
      </div>
      <div className="m-auto">
        <FormControl className="rounded-full" fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>ENG</MenuItem>
            <MenuItem value={20}>AR</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Header;
