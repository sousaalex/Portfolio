import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I am a junior full-stack developer passionate about modern web
              technologies, API microservices, and especially Artificial
              Intelligence (AI). I have experience in building scalable and
              robust web applications using React, Next.js, Node.js, Python, and
              Firebase.
            </p>
            <p className="mt-4 text-muted-foreground">
              I have worked on various projects, from small-scale websites to
              medium-scale web Plataform. I am always eager to learn new
              technologies and stay up-to-date with the latest industry trends.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="mt-4 space-y-4">
              {/*    <div>
              <h3 className="font-semibold">Full-Stack Developer</h3>
              <p className="text-muted-foreground">Acme Inc. | 2021 - Present</p>
              <p className="mt-2 text-muted-foreground">
                Developed and maintained web applications using React, Next.js, Node.js, and Firebase. Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div> */}
              <div>
                <h3 className="font-semibold">Web Developer Intern</h3>
                <p className="text-muted-foreground">
                  I worked as a Web Developer Intern at Icognit Cloud.
                </p>
                <p className="mt-2 text-muted-foreground">
                  I contributed to the development of responsive websites, gaining hands-on experience in web development.
                  I worked with ServiceNow
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Web Developer Intern</h3>
                <p className="text-muted-foreground">
                  I worked as a Web Developer Intern at 2GF.
                </p>
                <p className="mt-2 text-muted-foreground">
                  I worked on two web projects, enhancing my skills in
                  front-end development. I focused on creating
                  efficient and scalable web solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Web Developer Intern</h3>
                <p className="text-muted-foreground">
                  I worked as a Web Developer Intern at Softinsa (IBM).
                </p>
                <p className="mt-2 text-muted-foreground">
                  I gained valuable experience in the industry, working on
                  large-scale projects. I developed my understanding of best
                  practices in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
