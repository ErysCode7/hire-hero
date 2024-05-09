import LoginButton from '@/components/login-button'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import SignUpButton from '@/components/sign-up-button'
import GlobeComponent from '@/components/ui/globe'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

import React from 'react'

const HomePage = () => {
  const words = [
    {
      text: 'Connect',
    },
    {
      text: 'with',
    },
    {
      text: 'People',
    },
    {
      text: 'through',
    },
    {
      text: 'Hire Hero',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]

  const products = [
    {
      title: 'Product 1',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 2',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 3',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 4',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 5',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 6',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 7',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 8',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 9',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 10',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 11',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 12',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 13',
      thumbnail: '/next.svg',
    },
    {
      title: 'Product 14',
      thumbnail: '/vercel.svg',
    },
    {
      title: 'Product 15',
      thumbnail: '/next.svg',
    },
  ]

  return (
    <MaxWidthWrapper className="pt-[50px]">
      <TracingBeam>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col items-center justify-center flex-1">
            <TypewriterEffect words={words} />
            <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              Explore countless opportunities on our platform!
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              <SignUpButton className="w-32 h-10" />
              <LoginButton className="w-32 h-10 " />
            </div>
          </div>
          <div className="flex-1">
            <GlobeComponent />
          </div>
        </div>
        <HeroParallax products={products} />
      </TracingBeam>
    </MaxWidthWrapper>
  )
}

export default HomePage
