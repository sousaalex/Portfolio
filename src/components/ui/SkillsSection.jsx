import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <FaHtml5 className="h-12 w-12 text-orange-600" />
            <div className="mt-2 text-center text-lg font-semibold">HTML5</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="h-12 w-12 text-blue-600" />
            <div className="mt-2 text-center text-lg font-semibold">CSS3</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="h-12 w-12 animate-spin text-blue-500" />
            <div className="mt-2 text-center text-lg font-semibold">React</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="h-12 w-12" />
            <div className="mt-2 text-center text-lg font-semibold">
              Next.js
            </div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoJavascript className="h-12 w-12 text-yellow-600 rounded-full" />
            <div className="mt-2 text-center text-lg font-semibold">
              JavaScript
            </div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <DiNodejs className="h-12 w-12" />
            <div className="mt-2 text-center text-lg font-semibold">
              Node.js
            </div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaPython className="h-12 w-12" />
            <div className="mt-2 text-center text-lg font-semibold">Python</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoFirebase className="h-12 w-12 text-yellow-500" />
            <div className="mt-2 text-center text-lg font-semibold">
              Firebase
            </div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="h-12 w-12 text-red-500" />
            <div className="mt-2 text-center text-lg font-semibold">Git</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="h-12 w-12" />
            <div className="mt-2 text-center text-lg font-semibold">GitHub</div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill className="h-12 w-12 text-cyan-500" />
            <div className="mt-2 text-center text-lg font-semibold">
              TailwindCSS
            </div>
            <div className="mt-1 text-center text-muted-foreground"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
