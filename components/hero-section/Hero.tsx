import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-200 space-y-10">
      <div className="container mx-auto text-center">
        <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          Build a brand and start selling in seconds.
        </div>
        <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-300 bg-clip-text text-transparent font-bold">
          No matter what you sell, Quill has something you need to run your
          online store.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-teal-500 text-white px-8 py-6 rounded-md text-lg font-bold">
            Get Started
          </Button>
          <Button className="bg-gray-600 text-white px-8 py-6 rounded-md text-lg font-bold">
            Learn More
          </Button>
        </div>
        <div className="pt-10">
          <video
            src="/videos/video.mp4"
            className="rounded-xl"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
