"use client";

import React from "react";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";
import { sampleArcs, globeConfig } from "./config";

const World = dynamic(() => import("./globe").then((m) => m.World), {
  ssr: false,
});

const GlobeComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center py-20 md:h-auto dark:transparent bg-transparent relative">
      <div className="w-full relative overflow-hidden h-full md:h-[40rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            Connect with People
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            Explore countless opportunities on our platform!
          </p>
        </motion.div>
        <div className="w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;
