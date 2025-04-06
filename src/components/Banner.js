import React from "react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="bg-[#1f2937] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-left">
        <h1 className="text-5xl font-light mb-2">Hi! I'm</h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full inline-block mb-4">
          Syed Mohammed Hussain
        </h2>

        <p className="text-xl sm:text-2xl font-bold mb-4">
          QA Automation Engineer building scalable, testable, and reliable systems.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 mb-2">
          Technologist by passion. Driven by clean code, performance, and purpose.
        </p>

        <p className="text-base sm:text-lg text-gray-400 max-w-3xl">
          I specialize in automating what matters – accelerating delivery and empowering engineering teams through clean, efficient tooling.
        </p>

        <a
          href="https://github.com/MhussainD4772"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg mt-6 inline-block"
        >
          View My Work →
        </a>
      </div>
    </section>
  );
};

export default Banner;
