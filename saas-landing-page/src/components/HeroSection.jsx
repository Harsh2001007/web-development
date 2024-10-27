import React from "react";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  const phonenumber = "7011615800";

  const scrollTo100px = () => {
    window.scrollTo({ top: 2600, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center mt-6 lg:mg-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        We Build Websites and{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Apps for You
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We create custom websites and mobile apps for businesses and startups.
        Whether you have an idea or want to go online, we build solutions that
        fit your needs.
      </p>
      <div className="flex justify-center my-10">
        <a
          href={`tel:${phonenumber}`}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          submit your details
        </a>
        <a onClick={scrollTo100px} className="py-3 px-4 mx-3 rounded-md border">
          Plan Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
