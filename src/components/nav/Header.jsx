import Link from "next/link";
import React from "react";
import { SiHackerrank, SiGithub, SiLinkedin, SiLeetcode} from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-blue backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Anannya_Patra_SDE_Resume.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-white hover:text-amber transition-colors"
      href="https://www.linkedin.com/in/anannya-p-03a6a3110/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-white hover:text-amber transition-colors"
      href="https://github.com/anannya03"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-white hover:text-amber transition-colors"
      href="https://leetcode.com/u/anannyap_03/"
      target="_blank"
      rel="nofollow"
    >
      <SiLeetcode />
    </Link>
    <Link
      className="text-white hover:text-amber transition-colors"
      href="https://www.hackerrank.com/profile/anannyapatra"
      target="_blank"
      rel="nofollow"
    >
      <SiHackerrank />
    </Link>
  </div>
);
