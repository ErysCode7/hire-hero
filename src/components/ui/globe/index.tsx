'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'
import { sampleArcs, globeConfig } from './config'

const World = dynamic(() => import('./globe').then((m) => m.World), {
  ssr: false,
})

const GlobeComponent = () => {
  return (
    <div className="dark:transparent relative flex flex-row items-center justify-center bg-transparent py-20 md:h-auto">
      <div className="relative h-full w-full overflow-hidden md:h-[40rem]">
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
          <h2 className="text-center text-xl font-bold text-black dark:text-white md:text-4xl">
            Connect with People
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-base font-normal text-neutral-700 dark:text-neutral-200 md:text-lg">
            Explore countless opportunities on our platform!
          </p>
        </motion.div>
        <div className="z-10 h-72 w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  )
}

export default GlobeComponent
