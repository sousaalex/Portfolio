import React from "react";
import MentorIA from "../projects/MentorIA";
import Nasa from "../projects/Nasa";
import Iaip from '../projects/Iaip';

export default function ProjectSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <MentorIA />
          <Nasa />
          <Iaip/>
        </div>
      </div>
    </section>
  );
}
