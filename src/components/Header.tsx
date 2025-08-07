"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { scrollToElement } from "@/utils/scrollToElement";

export default function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between border-b border-zinc-800 gap-4 sm:gap-0">
      <div className="flex flex-row items-center gap-3 sm:gap-5">
        <Image
          src="/next-logo-white.svg"
          alt="Logo Next"
          width={35}
          height={35}
          draggable={false}
        />
        <h1 className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold text-white">
          Next Financial
        </h1>
      </div>
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <ul className="flex flex-row items-center gap-2 sm:gap-15 text-sm sm:text-base font-medium text-[#f7f7f7] mr-12">
          <li>
            <a href="#produto" onClick={scrollToElement}>
              Produto
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={scrollToElement}>
              Sobre
            </a>
          </li>
        </ul>
        <Button variant="login" href="/login">
          Login
        </Button>
        <Button variant="register" href="/register">
          Register
        </Button>
      </div>
    </header>
  );
}
