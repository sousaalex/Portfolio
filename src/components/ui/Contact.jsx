"use client";

import React, { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const websocketRef = useRef(null);

  useEffect(() => {
    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setIsLoading(true);
      setMessageSent(false); // Resetar o estado antes de enviar

      if (
        websocketRef.current &&
        websocketRef.current.readyState === WebSocket.OPEN
      ) {
        // Conexão já aberta, podemos enviar diretamente
        const data = { name, email, message };
        websocketRef.current.send(JSON.stringify(data));
      } else {
        // Conexão fechada ou não existe, reabrir
        websocketRef.current = new WebSocket("wss://portfolio-send-email-lively-hill-8362.fly.dev");

        websocketRef.current.onopen = () => {
          const data = { name, email, message };
          websocketRef.current.send(JSON.stringify(data));
        };
      }

      websocketRef.current.onmessage = () => {
        // Adicione um manipulador onmessage
        setMessageSent(true);
        setError(null);
        clearForm();
        setIsLoading(false);
        // Aguarda 5 segundos e redefine messageSent
        setTimeout(() => {
          setMessageSent(false);
        }, 5000); // 5000 milissegundos = 5 segundos

        setIsLoading(false);
      };

      websocketRef.current.onerror = (error) => {
        console.error("Erro no WebSocket:", error);
        setError("An error occurred while sending the message.");
        setIsLoading(false);
      };
    } catch (error) {
      console.error("Erro inesperado:", error);
      setError("An unexpected error occurred.");
      setIsLoading(false);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

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
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto mt-4 space-y-4 p-6 bg-white shadow-md shadow-gray-500 rounded-lg"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className={`w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600 transition duration-300 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "sending..." : "Send Message"}
              </Button>
              {messageSent && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
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
