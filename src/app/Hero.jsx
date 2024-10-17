"use-client";
import Image from "next/image";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="h-screen">
      <Header />
      <section className="relative flex justify-center bg-smoke-2 ">
        <Image
          src={"/img/hero bg.png"}
          alt="Hero bg"
          height="100"
          width="1920"
          className="absolute left-0 w-screen "
        />
        <div className="container flex items-center justify-center pl-40">
          <div className="flex flex-col items-start gap-8 font-display">
            <div className="flex gap-2 pl-2 text-xl font-bold text-theme-1">
              <Image
                src={"/svgs/flower.svg"}
                alt="search"
                height="25"
                width="25"
              />
              <span>Best Spa Massages Parlor</span>
            </div>
            <h1 className="text-7xl font-black w-[600px]">
              Elevate Your Body And Mind With Our Spa Massages
            </h1>
            <button className="px-5 py-4 font-sans text-white bg-theme-1">
              EXPLORE SERVICES -
            </button>
          </div>
          <Image
            src={"/img/hero model.png"}
            alt="Hero model"
            height="1000"
            width="750"
            className="relative"
          />
        </div>
        <Image
          src={"/img/flower line.png"}
          alt="Hero flower line"
          height="1000"
          width="1920"
          className="absolute -bottom-20 "
        />
      </section>
    </div>
  );
}
