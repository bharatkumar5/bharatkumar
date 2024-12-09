import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logos from "./../../../../public/logos.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Download,
  Twitter,
  Youtube,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center border-t border-white/10">
      <Image
        src={Logos}
        alt="Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex space-x-4">
        <Link
          href="https://youtube.com/@futureeureka?si=hEKiWQedrEaGGxhH"
          className="text-white/70 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="h-5 w-5" />
        </Link>

        <Link
          href="https://www.instagram.com/bharatseervi5/?hl=en"
          className="text-white/70 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="https://x.com/BharatKumarSee1"
          className="text-white/70 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bharat-kumar-seervi-a194b6149/"
          className="text-white/70 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
}
