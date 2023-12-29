"use client";

import { navIcon } from "@/constants/NavIcon";
import { navIconTypes } from "@/types/icon.types";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/assets/icons/logo.svg"}
            width={27}
            height={27}
            alt="logo"
          />
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcon.map((icon: navIconTypes) => (
            <Image 
              key={icon.alt}
              src={icon.src} 
              alt={icon.alt} 
              width={28} 
              height={28} 
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
