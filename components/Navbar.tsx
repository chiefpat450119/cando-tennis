"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

// TODO: Change links

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-30 bg-opacity-100">
      <div className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image
            src="/tennis-logo.jpeg"
            alt="Cando Tennis Logo"
            width={65}
            height={65}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/menu.svg"
                alt="Menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Image
                src="/menu.svg"
                alt="Menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </button>
          )}
        </div>
        <ul className="menu hidden h-full gap-12 md:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href} key={link.key} label={link.label} />
            </li>
          ))}
        </ul>
      </div>
      <div className="z-40">
        {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
