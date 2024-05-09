"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "./ui/mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import LoginButton from "./login-button";
import SignUpButton from "./sign-up-button";

const NavigationBar = () => {
  return (
    <nav className="h-20 fixed top-0 bg-white dark:bg-transparent right-0 left-0 z-50 shadow-sm">
      <MaxWidthWrapper className="flex items-center justify-between h-full">
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
  );
};

export default NavigationBar;
