"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

const SecondSection = () => {
  return (
    <div>
      <div className="md:flex-row flex-col items-center flex justify-center pb-10">
        <div className="p-5 justify-center md:w-1/3">
          <div
            className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text 
          text-transparent font-bold text-4xl pb-10 md:text-6xl"
          >
            From startup to enterprise, Quill is built for everyone
          </div>
          <div className="text-2xl mb-8">
            Built for all business and communities, Quill is the only platform
            you need to grow your business.
          </div>
          <Button className="bg-teal-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-teal-700">
            Get Started
          </Button>
        </div>
        <video className="rounded-xl md:w-2/4 p-4 md:p-0" autoPlay muted loop>
          <source src="/videos/video-2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-col items-center justify-center">
        <div
          className="text-3xl flex justify-center md:text-5xl pt-5 pb-10 
        bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent font-bold"
        >
          Product Features
        </div>
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3 gap-4 md:px-40">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex-col space-y-6 pb-10 border p-8 rounded-xl
               items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-gray-600 text-3xl font-bold">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={300}
                  className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                />
                <div className="">
                  <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                    {item.name}
                  </div>
                  <div className="bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent text-lg">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
