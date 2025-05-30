"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  "Log In",
  "Home",
  "Try Mazoom Invitation",
  "Features",
  "Customers",
  "Pricing",
  "Contact us",
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lang, setLang] = useState<"ENG" | "AR">("ENG");
  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* Sticky top header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex gap-3">
              <div className="lg:hidden block">
                {/* Hamburger on mobile */}
                <IconButton
                  className="md:hidden"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open menu"
                >
                  <FaBars size={20} />
                </IconButton>
                {/* Mobile drawer */}
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{ className: "w-64 p-4" }}
                >
                  <Box className="flex justify-between items-center mb-4">
                    <Image alt="logo" src="/next.svg" width={120} height={40} />
                    <IconButton onClick={() => setDrawerOpen(false)}>
                      <FaTimes size={20} />
                    </IconButton>
                  </Box>

                  <List>
                    {navItems.map((text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => setDrawerOpen(false)}
                          className="rounded-md mb-1 hover:bg-[#ec7a30] hover:text-white transition"
                        >
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </div>
              <div className="">
                <Image
                  alt="logo"
                  src="/next.svg"
                  width={150}
                  height={50}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <nav className="justify-center gap-2 col-span-4 bg-white border border-gray-200 shadow-[0_4px_6px_-2px_rgba(236,122,48,0.3)] rounded-full px-8 py-3 items-center transition-shadow duration-200 ease-in-out hidden lg:flex space-x-4">
            {navItems.map((item:string) => (
              <div
                key={item}
                onClick={()=>handleScroll(item)}
                className="text-[14px] xl:text-[18px] hover:text-white hover:bg-[#ec7a30] px-2 py-1 rounded-full cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center space-x-2">
            {/* Language selector (hidden on xs) */}
            <div className="w-24">
              <FormControl fullWidth size="small">
                <InputLabel id="lang-select-label">Lang</InputLabel>
                <Select
                  labelId="lang-select-label"
                  id="lang-select"
                  value={lang}
                  label="Lang"
                  onChange={(e) => setLang(e.target.value as "ENG" | "AR")}
                >
                  <MenuItem value="ENG">ENG</MenuItem>
                  <MenuItem value="AR">AR</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
