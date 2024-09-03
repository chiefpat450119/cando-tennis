import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  key: string;
  label: string;
}

const NavLink = ({ href, key, label }: NavLinkProps) => {
  return (
    <Link
      href={href}
      key={key}
      className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
    >
      {label}
    </Link>
  );
};

export default NavLink;
