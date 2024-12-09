"use client"; // Add this at the top to specify that this component runs on the client side
import Image from "next/image"
import React from "react";
import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Logos from "./../../../public/logos.png"

const Navigation = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto relative">
      <div className="flex space-x-4">
        {/* <button className="text-white/70 hover:text-white">Save</button>
        <button className="text-white/70 hover:text-white">More Like This</button>
        <button className="text-white/70 hover:text-white">Permalink</button> */}
           <Image
          src={Logos}
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>

      <div className="flex space-x-6 hidden md:flex">
        <Link href="/" className="text-white/70 hover:text-white">
          HOME
        </Link>
        <Link href="/resume" className="text-white/70 hover:text-white">
          RESUME
        </Link>
      
        <Link href="/contact" className="text-white hover:text-white">
          CONTACT
        </Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="absolute top-16 right-4 bg-gray-800 p-4 rounded-md md:hidden hidden">
        <Link href="/" className="block text-white/70 hover:text-white py-2">
          HOME
        </Link>
        <Link href="/resume" className="block text-white/70 hover:text-white py-2">
          RESUME
        </Link>
    
        <Link href="/contact" className="block text-white/70 hover:text-white py-2">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
