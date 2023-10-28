"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    url: "/logo/logo-1.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-2.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-3.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-4.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-5.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-6.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-7.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-8.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-9.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-10.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-11.svg",
    alt: "logo",
  },
  {
    url: "/logo/logo-12.svg",
    alt: "logo",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className="items-center flex justify-center text-3xl font-bold md:pb-10 px-10 
    bg-gradient-to-r from-orange-500 to-violet-400 bg-clip-text text-transparent"
      >
        More than 100+ brands have build their business with Quill.
      </div>
      <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {logos.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.8,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center h-40 w-40"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Carousel;
