"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import Navbar from "@/components/ui/NavbarSection";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/portfolio');
  }, []);

  return (
    <div className="w-full h-full fixed top-0 left-0  flex justify-center items-center">
      <Navbar/>
      <div className="flex justify-center items-center text-center space-x-2">
        <Spin size="small" />
      </div>
    </div>
  );
}