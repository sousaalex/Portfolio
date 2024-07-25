import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Alex from '../../../public/image/Alex.jpg';

export default function Section() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false, // Permite que a animação ocorra toda vez que o elemento entra na viewport
    threshold: 0.1, // Percentual do elemento visível antes de acionar a animação
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="flex bg-cyan-400 w-full h-full min-h-screen bg-cover">
      <section className="flex flex-1 items-center justify-center bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center">
              <motion.h1
                ref={headingRef}
                className="text-4xl text-center sm:text-left lg:text-left font-bold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: -50 }}
                animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
              >
                Hello, I&apos;m Alex Fonseca
              </motion.h1>
              <motion.p
                ref={paragraphRef}
                className="mt-3 text-lg text-muted-foreground text-center sm:text-left lg:text-left sm:mt-5 sm:text-xl lg:text-2xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={paragraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                A passionate full-stack developer with expertise in modern web technologies.
              </motion.p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={Alex}
                alt="Alex Fonseca"
                width={450}
                height={300}
                className="h-64 w-64 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
