import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="regular-16 lg:regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
    >
      {label}
    </Link>
  );
};

export default NavLink;
