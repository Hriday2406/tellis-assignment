"use client";
import Hero from "./Hero";
import Services from "./Services";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch gap-[120px] relative">
      <Hero />
      <Services />
    </div>
  );
}

