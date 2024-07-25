import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai"; // Importando os ícones correspondentes do react-icons

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <form className="max-w-md mx-auto mt-4 space-y-4 p-6 bg-white shadow-md shadow-gray-500 rounded-lg">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <AiOutlineMail className="h-6 w-6 text-muted-foreground text-cyan-500" />
                <a
                  href="mailto:sousaalex1605@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  sousaalex1605@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlinePhone className="h-6 w-6 text-muted-foreground text-cyan-500" />
                <a
                  href="tel:+351937270351"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +351937270351
                </a>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlineEnvironment className="h-6 w-6 text-muted-foreground text-cyan-500" />
                <div className="text-muted-foreground">
                  Fundão, Castelo-Branco
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
