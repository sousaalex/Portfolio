import React from "react";
import Link from "next/link";
import Image from "next/image";
import NasaAtelier from "../../../public/image/Nasa.jpeg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiPadlock } from "react-icons/gi";
import { warnings } from "../Antd/sms";

export default function Nasa() {
  const handleBlocked = () => {
    warnings();
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/4 shadow-md shadow-gray-500">
      <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={NasaAtelier}
          alt="Nasa Atelier"
          className="w-full object-cover transition-transform duration-300 transform group-hover:scale-110"
          layout="responsive"
          width={600} // Diminuído de 800 para 600
          height={450} // Diminuído de 600 para 450
        />
        <div className="absolute inset-0 bg-fiber-carbon px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white">
            Nasa Atelier Decoration
          </h3>

          <div className="flex flex-col mt-2 text-white space-y-3">
            <p className="text-sm">A full-stack web platform built with:</p>
            <div className="flex items-center">
              <FaReact className="animate-spin text-cyan-500 mr-2" />
              <p className="text-xs">React.js</p>
            </div>
            <div className="flex items-center">
              <SiNextdotjs className="text-cyan-500 mr-2" />
              <p className="text-xs">Next.js</p>
            </div>
            <div className="flex items-center">
              <IoLogoJavascript className="text-cyan-500 mr-2 rounded-full" />
              <p className="text-xs">JavaScript</p>
            </div>
            <div className="flex items-center">
              <RiTailwindCssFill className="text-cyan-500 mr-2" />
              <p className="text-xs">Tailwind CSS</p>
            </div>
          </div>

          <div className="mt-3 flex gap-3">
            <a
              target="_blanc"
              href="https://nasa-atelier-decoration-st.vercel.app/"
              className="inline-flex items-center justify-center rounded-md bg-white text-primary px-3 py-1.5 text-xs font-medium transition-colors hover:bg-opacity-90"
            >
              View Project
            </a>
            <div
              onClick={handleBlocked}
              className="inline-flex items-center justify-center rounded-md cursor-not-allowed border border-cyan-400 px-3 py-1.5 text-xs font-medium text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-white"
            >
              <GiPadlock className="w-3 h-3 mr-1" />
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
