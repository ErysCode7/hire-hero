'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from './ui/mode-toggle'
import MaxWidthWrapper from './max-width-wrapper'
import LoginButton from './login-button'
import SignUpButton from './sign-up-button'

const NavigationBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-20 bg-white shadow-sm dark:bg-transparent">
      <MaxWidthWrapper className="flex h-full items-center justify-between">
        <Link href="/">
          <Image src="/next.svg" width={80} height={80} alt="logo" />
        </Link>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-5">
            <SignUpButton className="w-24" />
            <LoginButton className="w-24" />
          </div>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default NavigationBar
