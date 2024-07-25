"use client";
import React, { useState } from "react";
import SmoothScrollLink from "../scroll/SmoothScrollLink";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-gray-100 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <SmoothScrollLink
          href="/portfolio#/"
          className="text-3xl md:text-4xl font-extrabold"
        >
          Port<span className="text-cyan-400">folio</span>
        </SmoothScrollLink>
        <nav className="hidden md:flex items-center text-xl space-x-6">
          <SmoothScrollLink
            href="/portfolio#about"
            className="hover:text-cyan-400 hover:border-b-2 border-transparent  hover:border-cyan-400  transition duration-300"
          >
            About Me
          </SmoothScrollLink>
          <SmoothScrollLink
            href="/portfolio#skills"
            className="hover:text-cyan-400 hover:border-b-2 border-transparent  hover:border-cyan-400  transition duration-300"
          >
            My Skills
          </SmoothScrollLink>
          <SmoothScrollLink
            href="/portfolio#projects"
            className="hover:text-cyan-400 hover:border-b-2 border-transparent  hover:border-cyan-400  transition duration-300"
          >
            My Projects
          </SmoothScrollLink>
          <SmoothScrollLink
            href="/portfolio#contact"
            className="hover:text-cyan-400 hover:border-b-2 border-transparent  hover:border-cyan-400  transition duration-300"
          >
            Contact Me
          </SmoothScrollLink>
        </nav>
        <nav
          className={`md:hidden fixed mt-16 top-0 left-0 w-64 h-screen bg-gray-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition duration-300 ease-in-out`}
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-xl space-y-6">
            <SmoothScrollLink
              href="/portfolio#about"
              spy={true}
              smooth={true}
              className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400  transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </SmoothScrollLink>
            <SmoothScrollLink
              href="/portfolio#skills"
              spy={true}
              smooth={true}
              className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400  transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              My Skills
            </SmoothScrollLink>
            <SmoothScrollLink
              href="/portfolio#projects"
              spy={true}
              smooth={true}
              className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400  transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              My Projects
            </SmoothScrollLink>
            <SmoothScrollLink
              href="/portfolio#contact"
              spy={true}
              smooth={true}
              className="hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400  transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </SmoothScrollLink>
          </div>
        </nav>
        <div className="md:hidden">
          <button
            className="text-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <TfiClose className="w-8 h-8" />
            ) : (
              <TbMenu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
