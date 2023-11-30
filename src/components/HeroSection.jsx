"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
            Hello, I'm{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Benjamin",
              1000,
              "Web Developer",
              1000,
              "Mobile Designer",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Le gras c'est la vie le beurre c'est le bonheur.
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-300 via-green-400 to-yellow-400 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
            Hire Me
          </button>
          <button className="m-4 bg-gradient-to-br from-blue-300 via-green-400 to-yellow-400 px-1 py-1  text-white rounded-full">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/benji.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 left-1/2"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
