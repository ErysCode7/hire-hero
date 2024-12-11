import SignUpButton from '@/components/sign-up-button'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import LoginButton from '@/components/login-button'
import GlobeComponent from '@/components/ui/globe'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'

import Image from 'next/image'
import { BentoGridThirdDemo } from '@/components/ui/grid/grid'

const HomePage = () => {
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
    <>
      <MaxWidthWrapper>
        <TracingBeam>
          {/* HERO SECTION */}
          <div className="flex h-[calc(100vh_-_80px)] items-center justify-center gap-5 bg-cover bg-center bg-no-repeat">
            <div className="flex flex-1 flex-col items-center gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-center text-6xl font-bold text-[#14181f] dark:text-white">
                  Connect with <span className="text-blue-500">HireHero</span>{' '}
                </h1>
                <p className="mx-auto max-w-md text-base font-normal text-neutral-700 dark:text-neutral-200 md:text-lg">
                  Explore countless opportunities on our platform!
                </p>
              </div>
              <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <LoginButton className="h-10 w-28" />
                <SignUpButton className="h-10 w-28" />
              </div>
            </div>
            <div className="flex-1">
              <GlobeComponent />
            </div>
          </div>
        </TracingBeam>
      </MaxWidthWrapper>
      <HeroParallax products={products} />
      <BentoGridThirdDemo />
    </>
  )
}

export default HomePage
